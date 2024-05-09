from model.model import forecast
import sqlite3


def process_chunk(data):
    res = forecast("".join(data), type="text")
    return res


def process_file_in_chunks(filename, chunksize=24):
    with open(filename, "r") as f:
        with open("output.txt", "w") as out:
            chunk = []
            for line in f:
                chunk.append(line)
                if len(chunk) == chunksize:
                    res = process_chunk(chunk)
                    chunk = rearrange_chunk(chunk)
                    chunk = concat_model_output_to_chunk(chunk, res)
                    out.writelines(chunk)
                    write_chunk_to_db(chunk) 
                    chunk = []

def concat_model_output_to_chunk(chunk, output):
    for i, line in enumerate(chunk):
        # Add a space followed by the model output before the newline character
        chunk[i] = f"{line} {output[i]}"
    return chunk

def rearrange_chunk(chunk):
    # 0 YEAR = 0
    # 1 DAY = 1
    # 2 HOUR = 2
    # 3 MAG_AVG_FIELD = 3
    # 4 BX_GSE = 4
    # 5 SIGMA_B = 5
    # 6 SIGMA_BX = 6
    # 7 SIGMA_BY = 7
    # 8 SIGMA_BZ = 8
    # 9 NA_NP = 9
    # 10 SIGMA_PHI_V = 10
    # 11 SIGMA_THETA_V = 11
    # *12 PROT_FLUX_1 = 14
    # *13 PROT_FLUX_2 = 15
    # *14 PROT_FLUX_30 = 16
    # *15 PROT_FLUX_60 = 17
    # *16 PC_N = 13
    # *17 KP = 12
    # 18 PREDICTION = 18
    new_chunk = []
    for i, line in enumerate(chunk):
        row = line.split()
        bkup12 = row[12]
        bkup13 = row[13]
        bkup14 = row[14]
        bkup15 = row[15]
        bkup16 = row[16]
        bkup17 = row[17]

        row[12] = bkup14
        row[13] = bkup15
        row[14] = bkup16
        row[15] = bkup17
        row[16] = bkup13
        row[17] = bkup12
        line = " ".join(row)
        new_chunk.append(line)
        
    return new_chunk

def write_chunk_to_db(chunk):
    conn = sqlite3.connect("data.db")
    c = conn.cursor()
    for line in chunk:
        line = line.split()
        line = ", ".join(line)
        print(f"INSERT INTO space_weather VALUES ({line})")
        c.execute(
            f"INSERT INTO space_weather VALUES ({line})"
        )
    conn.commit()
    conn.close()

# Example usage
process_file_in_chunks("omni2_R8WNhPuPhz.lst")
