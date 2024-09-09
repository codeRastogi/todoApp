const express = require('express');
const { createTodo } = require('../controller/createTodo');
const {getTodo, getTodoById} = require('../controller/getTodo');
const {updateTodo} = require('../controller/updateTodo');
const {deleteTodo} = require('../controller/deleteTodo');
const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
