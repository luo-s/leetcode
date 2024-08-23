-- https://leetcode.com/problems/human-traffic-of-stadium/

-- Table: Stadium
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | visit_date    | date    |
-- | people        | int     |
-- +---------------+---------+
-- visit_date is the column with unique values for this table.
-- Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
-- As the id increases, the date increases as well.
 
-- Write a solution to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.
-- Return the result table ordered by visit_date in ascending order.
-- The result format is in the following example.

-- Example 1:

-- Input: 
-- Stadium table:
-- +------+------------+-----------+
-- | id   | visit_date | people    |
-- +------+------------+-----------+
-- | 1    | 2017-01-01 | 10        |
-- | 2    | 2017-01-02 | 109       |
-- | 3    | 2017-01-03 | 150       |
-- | 4    | 2017-01-04 | 99        |
-- | 5    | 2017-01-05 | 145       |
-- | 6    | 2017-01-06 | 1455      |
-- | 7    | 2017-01-07 | 199       |
-- | 8    | 2017-01-09 | 188       |
-- +------+------------+-----------+
-- Output: 
-- +------+------------+-----------+
-- | id   | visit_date | people    |
-- +------+------------+-----------+
-- | 5    | 2017-01-05 | 145       |
-- | 6    | 2017-01-06 | 1455      |
-- | 7    | 2017-01-07 | 199       |
-- | 8    | 2017-01-09 | 188       |
-- +------+------------+-----------+
-- Explanation: 
-- The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
-- The rows with ids 2 and 3 are not included because we need at least three consecutive ids.

-- Union three queries and order by visit_date
WITH temp AS (
    SELECT s1.id AS id1, s2.id AS id2, s3.id AS id3,         
        s1.visit_date AS visit1, s2.visit_date AS visit2, s3.visit_date AS visit3,
        s1.people AS people1, s2.people AS people2, s3.people AS people3            -- avoid duplicate names
    FROM Stadium as s1
    LEFT JOIN Stadium as s2
    ON s1.id = s2.id + 1
    LEFT JOIN Stadium as s3
    ON s1.id = s3.id - 1
    WHERE s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100)

SELECT id1 AS id, visit1 AS visit_date, people1 AS people
FROM temp
UNION
    SELECT id2, visit2, people2
    FROM temp
    UNION 
        SELECT id3, visit3, people3
        FROM temp
ORDER BY visit_date;

-- COUNT() OVER() with RANGE BETWEEN, NO UNION  
WITH temp AS (
    SELECT *, 
     COUNT(*) OVER (ORDER BY id RANGE BETWEEN current ROW AND 2 FOLLOWING) AS following_cnt,
     COUNT(*) OVER (ORDER BY id RANGE BETWEEN 2 PRECEDING AND current ROW) AS preceding_cnt,
     COUNT(*) OVER (ORDER BY id RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS current_cnt
FROM stadium
WHERE people >= 100
)

SELECT id, visit_date, people
FROM temp
WHERE following_cnt >= 3 OR preceding_cnt >= 3 OR current_cnt >= 3
ORDER BY visit_date;

-- ROW_NUMBER() 
WITH temp AS (
    SELECT *, id - ROW_NUMBER() OVER() AS id_diff
    FROM Stadium
    WHERE people >= 100
)

SELECT id, visit_date, people
FROM temp
WHERE id_diff IN (
    SELECT id_diff 
    FROM temp 
    GROUP BY id_diff 
    HAVING count(*) > 2)
ORDER BY visit_date;