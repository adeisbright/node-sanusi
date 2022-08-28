const customers = require("./customers") 

const getToken = async (req, res) => {
    const token = "12345"
     res.status(200).json({
        message: `Your token is ${token}`, 
        data: token, 
        success: true, 
        statusCode : 200
    })
}

const getAllCustomers = async (req, res) => {
    res.status(200).json({
        message: "Customer retrieved successfully", 
        data: customers, 
        success: true, 
        statusCode : 200
    })
} 



module.exports = {
    getAllCustomers, 
    getToken
}