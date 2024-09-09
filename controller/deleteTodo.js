const todo = require('../models/Todo');


 exports.deleteTodo = async(req, res) => {

    try {
       const {id} = req.params;
       await todo.findByIdAndDelete(id);
       res.status(200).json(
        {
            success : true,
     
            message : "Todo deleted successfully"
        }
       )

    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500)
        .json({
            success : false,
            data: "internal server error",
            message: error.message,
        })

    }

 }