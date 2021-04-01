-- Part 1: Working with tasks

-- Adding a task with these attributes: title, description, created, updated, due_date, status_id
INSERT INTO task (title, description, created, updated, due_date, status_id) 
VALUES ('taking notes', 'make a summery of the books', '2017-11-1', '2017-11-2', '2017-11-5', 3);

-- Changing the title of a task
UPDATE task
SET
	title = 'Wash and dry clothes'
WHERE
	id = 1;
    
-- Changing due_date of a task
SET SQL_SAFE_UPDATES = 0;
    
UPDATE task
SET
	due_date = '2023-2-23 12:00:00'
WHERE
	id = 10;

-- Changing status of a task
UPDATE task
SET
	status_id = 1
WHERE
	id= 1;

-- Mark a task as complete
UPDATE task
SET
	status_id = 3
WHERE
	title = 'Write a book';
    
-- Delete a task
DELETE FROM task
WHERE id = 14;




-- Part 2: School database
	
-- creating database
CREATE DATABASE hw2;
USE hw2;

-- creating table ´Class´
CREATE TABLE Class(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 begins DATE,
 ends DATE
);

-- creating table ´Student´
CREATE TABLE Student(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100),
phone INT,
class_id INT NOT NULL,
FOREIGN KEY Student(class_id) REFERENCES Class(id)
);

-- Creating index on name column in student table 
CREATE Index idx_name
ON Student(name);

ALTER TABLE student
ADD constraint FK_studentClass
foreign key (class_id) references class(id)

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished 
ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished');




-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.title AS Task
FROM task t
	INNER JOIN user_task ut ON t.id = ut.task_id
    INNER JOIN user u ON u.id = ut.user_id AND u.email LIKE '%@spotify.com%';
    
    
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title AS Task
From task
	INNER JOIN user_task ON task.id = user_task.task_id
    INNER JOIN user ON user.id = user_task.user_id AND user.name = 'Donald Duck'
    INNER JOIN status ON task.status_id = status.id AND status.name = 'Not started';
    
    
-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT t.title AS Task
From task t
	INNER JOIN user_task ut ON t.id = ut.task_id AND month(created) = 9
    INNER JOIN user u ON u.id = ut.user_id AND u.name = 'Maryrose Meadows';
    
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT  month(created), count(id) 
FROM task 
GROUP BY month(created);


