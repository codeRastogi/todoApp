
const Todo = require('../models/Todo');


exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from data
        const todos = await Todo.find({});

        //respose

        res.status(200)
        .json({
            success: true,
            data: todos,
            message:'Entire Todo Data Fetched successfully'
        })
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success: false,
            error: error.message,
            message: "Error fetching"
        })
        
    }
}


//get todoById

exports.getTodoById = async (req, res) => {
    try {
       //get todo by Id
       const todo = await Todo.findById({_id : req.params.id});
        
       if(!todo) {
        res.status(404)
        .json({
            success: false,
            message: 'Todo not found'
        });
       }
       res.status(200)
       .json({
        success: true,
        data: todo,
        message: 'Success'
       })

    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success: false,
            error: error.message,
            message: "Error fetching"
        })
    }
}