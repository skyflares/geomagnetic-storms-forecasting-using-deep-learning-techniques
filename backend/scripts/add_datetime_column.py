import sqlite3
import datetime
# Get all records in db data table space_weather
conn = sqlite3.connect('data.db')
c = conn.cursor()
c.execute('SELECT * FROM space_weather')
rows = c.fetchall()




for row in rows:
    year = row[0]
    day_of_year = row[1]
    hour = row[2]

    date = datetime.datetime(year, 1, 1) + datetime.timedelta(day_of_year - 1)
    # add hours to date
    date = date + datetime.timedelta(hours=hour)
    # COnvert to unix timestamp
    timestamp = date.timestamp()

    # Update the record with the new timestamp
    c.execute('UPDATE space_weather SET combined_datetime=? WHERE Year=? AND Day=? AND Hour=?', (timestamp, year, day_of_year, hour))

conn.commit()
conn.close()