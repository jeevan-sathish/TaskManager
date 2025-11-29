const express = require("express");
const cors = require("cors");
const client = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

// Add Task
app.post("/task", async (req, res) => {
  const { task } = req.body;

  try {
    const result = await client.query(
      "INSERT INTO tasks (task) VALUES ($1) RETURNING *",
      [task]
    );
    res.json({ message: "Task added", data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding task" });
  }
});

// Get All Tasks
app.get("/task", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await client.query("DELETE FROM tasks WHERE id = $1", [id]);
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting task" });
  }
});


// Run server
app.listen(3000, () =>
  console.log(`Successfully running on http://localhost:3000`)
);
