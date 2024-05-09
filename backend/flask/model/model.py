import tflite_runtime.interpreter as tflite
from enum import Enum
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import pickle as pk


class Feature(Enum):
    MAG_AVG_FIELD = 0
    BX_GSE = 1
    SIGMA_B = 2
    SIGMA_BX = 3
    SIGMA_BY = 4
    SIGMA_BZ = 5
    NA_NP = 6
    SIGMA_PHI_V = 7
    SIGMA_THETA_V = 8
    PROT_FLUX_1 = 11
    PROT_FLUX_2 = 12
    PROT_FLUX_30 = 13
    PROT_FLUX_60 = 14
    PC_N = 10
    KP = 9


# Order of features in the trained model
features_order = [f.value for f in Feature]

data_raw_sample = """2024  70  0   3.7   2.7   2.1   1.2   0.9   1.4 0.045   1.0   1.2 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  1   3.4   1.1   2.4   1.1   1.7   1.3 0.042   1.6   1.5 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  2   3.5   2.6   2.1   0.9   1.0   1.7 0.046   1.5   1.2 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  3   2.1   1.8   2.8   2.0   1.6   1.2 0.048   1.8   1.1 13 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  4   3.0  -0.5   2.2   1.4   1.0   1.4 0.045   0.6   1.2 13 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  5   1.9  -0.7   3.0   1.6   1.3   2.2 0.048   0.8   1.7 13 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  6   1.8  -0.2   3.3   2.7   0.9   1.7 0.047   0.8   1.7 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  7   2.3  -0.1   2.6   1.5   0.9   1.9 0.042   1.0   1.9 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  8   3.5  -2.0   1.8   0.8   1.1   1.2 0.034   1.1   0.6 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70  9   3.4   0.2   1.6   1.4   0.8   0.3 0.045   0.6   0.4 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 10   3.0  -1.1   1.8   1.2   0.5   1.2 0.042   0.5   1.2 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 11   2.9   0.9   1.8   0.7   0.7   1.5 0.045   0.7   1.4 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 12   1.9   0.5   1.9   1.3   1.0   1.0 0.044   2.4   0.6 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 13   2.8   1.5   1.9   0.8   1.4   1.0 0.048   1.5   1.2 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 14   2.6   1.6   2.2   1.5   1.3   0.9 0.049   1.3   1.1 17 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 15   3.1   0.0   2.0   1.4   0.8   1.2 0.040   1.5   1.5 20 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 16   3.3   0.1   1.7   1.1   0.7   1.1 0.045   1.3   1.4 20 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 17   3.6   1.3   1.3   1.0   0.3   0.8 0.046   0.5   0.8 20 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 18   2.8   1.3   2.4   1.5   1.6   1.0 0.047   1.8   1.2 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 19   3.0   1.3   2.6   1.8   1.5   1.2 0.050   1.3   1.6 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 20   4.2  -1.5   1.8   1.5   0.6   0.9 0.038   0.5   1.3 23 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 21   4.2  -1.4   1.1   0.6   0.5   0.8 0.032   0.7   0.6  7 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 22   3.5  -2.4   2.0   1.2   1.1   1.2 0.039   0.8   1.4  7 999.9 999999.99 99999.99 99999.99 99999.99
2024  70 23   3.7  -1.1   1.6   0.9   0.8   0.9 0.042   0.9   1.2  7 999.9 999999.99 99999.99 99999.99 99999.99
"""


def forecast(data=data_raw_sample, type="text", filepath=None):
    if type == "text":
        data = [line.split() for line in data.split("\n") if line]
    elif type == "file":
        with open(filepath, "r") as f:
            data = []
            for line in f:
                data.append(line.split())
    df = pd.DataFrame(np.array(data, dtype=float))
    # Remove the date columns
    df.drop([0, 1, 2], axis="columns", inplace=True)
    # Rename the columns
    df.columns = range(df.shape[1])
    # Reorder the columns to match the model features order
    df = df[features_order]
    res = _forecast(df)
    print(res)
    return res


def _forecast(df):
    # Load tflite model
    interpreter = tflite.Interpreter(model_path="model/exports/model.tflite")
    interpreter.allocate_tensors()
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    # Load the standard scaler
    scaler = pk.load(open("model/exports/standard_scaler.pkl", "rb"))

    # Scale Kp values from Kp*10 to Kp
    df[df.columns[-1]] = df[df.columns[-1]] / 10
    # Scale the data except for kp
    df[df.columns[:-1]] = scaler.transform(df[df.columns[:-1]])
    # Reshape the data to match the model input
    data = np.expand_dims(df, axis=0)
    interpreter.set_tensor(input_details[0]["index"], data.astype(np.float32))
    interpreter.invoke()
    pred = interpreter.get_tensor(output_details[0]["index"]).squeeze()
    pred = pred.round()
    pred = np.clip(pred, 0, 9)

    # Check if any of the predictions are stormy
    # storm = (pred >= 5).any()

    return pred
