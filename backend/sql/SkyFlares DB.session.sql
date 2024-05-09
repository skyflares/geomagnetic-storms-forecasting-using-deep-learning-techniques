-- select Year || substr(zeropad(cast(Day AS TEXT), 3), -3) || substr(zeropad(cast(Hour AS TEXT), 2), -2), * from space_weather
-- select Year*1000+Day*100+Hour as sum, * from space_weather

-- april 1 2024 until april 10 2024
-- where sum BETWEEN 2024*1000+92*100 and 2024*1000+100*100;

SELECT * FROM space_weather WHERE combined_datetime BETWEEN 1491053210 AND 1491262010
ORDER BY asc
