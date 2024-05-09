from model.model import forecast
from flask import Flask
import sqlite3
from flask import request
from flask import jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# List of routes:
# GET /data?from=YYYY-DD-HH&to=YYYY-DD-HH - returns the data from the database between the two dates as a JSON array


@app.route("/data")
def get_data():
    conn = sqlite3.connect("data.db")
    c = conn.cursor()
    from_timestamp = request.args.get("from")
    to_timestamp = request.args.get("to")

    # if from_timestamp or to_timestamp is not provided, add default values
    if not from_timestamp:
        from_timestamp = 0
    if not to_timestamp:
        to_timestamp = 9999999999999

    c.execute(
        f"SELECT * FROM space_weather WHERE combined_datetime BETWEEN {from_timestamp} AND {to_timestamp} ORDER BY combined_datetime ASC"
    )

    data = c.fetchall()
    column_names = [column[0] for column in c.description]  # Get column names
    response = {"data": data, "column_names": column_names}
    conn.close()
    return jsonify(response)
