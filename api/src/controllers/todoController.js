import sql from 'mssql';
import config from '../db/config.js';

// // Get all todos
export const getTodos = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("select * from todoData");
        res.status(200).json(result.recordset);
        // console.dir(result);
    } catch (error) {
        res.status(201).json({ error: 'an error occurred while creating the todo' });
    } finally {
        sql.close(); // Close the SQL connection
    }
};

// // Get a single todo
export const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("todoId", sql.Int, id)
            .query("select * from todoData where id = @todoId");
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving todo' });
    } finally {
        sql.close();
    }
};

// // Create a new todo
export const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        let insertTodo = await pool.request()
            .input("description", sql.VarChar, description) // Insert the description into the SQL query
            .query("insert into todoData (description) values (@description)"); // Execute the SQL query
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the todo' });
    } finally {
        sql.close();   // Close the SQL connection
    }
};
// // Update a todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("todoId", sql.Int, id)
            .input("todoDescription", sql.VarChar, description)
            .query("UPDATE todoData SET description = @todoDescription WHERE id = @todoId");
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the todo' });
    } finally {
        sql.close();
    }
};
// // Delete a todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM todoData WHERE id = ${id}`;
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the todo' });
    } finally {
        sql.close();
    }
};
