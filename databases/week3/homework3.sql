CREATE SCHEMA `mealsharing`;
USE `mealsharing`;

CREATE TABLE Meal (
 id INT NOT NULL,
 title VARCHAR(100),
 description TEXT,
 location VARCHAR(100),
 `when` DATETIME,
 max_reservations INT,
 price DECIMAL,
 created_date DATE,
 PRIMARY KEY (id)
 );


CREATE TABLE Reservation (
 id INT NOT NULL,
 number_of_guests INT,
 meal_id INT NOT NULL,
 created_date DATE,
 contact_phonenumber VARCHAR(100),
 contact_name VARCHAR(100),
 contact_email VARCHAR(100),
 PRIMARY KEY (id),
 FOREIGN KEY (meal_id) REFERENCES Meal (id) );
 

CREATE TABLE Review (
 id INT NOT NULL,
 title VARCHAR(100),
 description TEXT,
 meal_id INT NOT NULL,
 stars INT,
 created_date DATE,
 PRIMARY KEY (id),
 FOREIGN KEY (meal_id) REFERENCES Meal (id) );
 
 -- Get all meals
 SELECT * FROM meal;
 
-- Add a new meal
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (1, 'chicken', 'grilled chicken with vegetables', 'Amager', '2021-2-1 19:00', 4, 70, '2029-2-1');

INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (2, 'Burger', 'cow meat', 'Valby', '2021-2-2 14:00', 2, 80, '2029-2-1');

INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (3, 'Fish', 'salmon', 'Feredriksberg', '2021-2-3 12:00', 5, 100, '2029-2-2');

INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (4, 'Rød grød med fløde', 'havgrøn med mælk og kanel, smørre og fløde', 'Feredriksberg', '2021-3-3 12:00', 24, 40, '2029-2-1');
 
-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET `max_reservations` = 2
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 3;

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (10, 10, 2, '2021-2-1', 534747855, 'Charles','charles@yahoo.com');

INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (11, 20, 1, '2021-2-2', 534747777, 'Mary','Mary@hotmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
wHERE id = 10;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET `number_of_guests` = 3
WHERE id = 10;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 10;

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(20, 'good', 'enjoyed', 1, 4, '2021-3-3');
INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(21, 'bad', 'awful', 3, 1, '2021-3-4');
INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(22, 'fine', 'lovely', 2, 3, '2021-3-4');

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 21;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 4, description = 'so so'
WHERE id = 21;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 21;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT title, SUM(number_of_guests), max_reservations FROM meal
LEFT JOIN reservation ON meal_id = meal.id
GROUP BY meal_id
HAVING max_reservations > SUM(number_of_guests);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE '% grød %';

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date <= '2021-3-4' AND created_date >= '2021-1-1';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 2;

-- Get the meals that have good reviews
SELECT * FROM meal m
INNER JOIN review r ON m.id = r.meal_id
WHERE stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT m.title, r.created_date, r.number_of_guests FROM reservation r
JOIN meal m ON m.id = r.meal_id
WHERE m.id = 2
ORDER BY r.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(stars) FROM review
JOIN meal ON meal_id = meal.id
GROUP BY meal_id
ORDER BY AVG(stars);
