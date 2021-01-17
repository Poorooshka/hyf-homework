SELECT count(*) FROM task;

SELECT count(*) FROM task
WHERE due_date IS null;

SELECT * FROM task
WHERE status_id = 3;

SELECT * FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = "done";

SELECT * FROM task
JOIN STATUS ON task.status_id = status.id
WHERE status.name != "done";

select * from task order by created desc;

select * from task order by created desc
limit 1;

Select title, description From task
Where title like "%database%" or description like "%database%";

SELECT title, status.name FROM task
JOIN status ON task.status_id = status.id;

SELECT status.name, COUNT(status_id)
	FROM status
    LEFT JOIN task ON task.status_id = status.id
    GROUP BY status.name;

SELECT status.name, COUNT(status_id)
	FROM status
    LEFT JOIN task ON task.status_id = status.id
    GROUP BY status.name
    ORDER BY COUNT(status_id) DESC; 

 

