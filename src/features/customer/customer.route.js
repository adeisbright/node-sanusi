const { Router } = require("express") 
const {
    getAllCustomers, 
    getToken
} = require("./customer.controller")

const { verifyToken } = require("../../middleware")
const customerRouter = Router() 

customerRouter.get("/login" , getToken)
customerRouter.get("/customers",verifyToken ,  getAllCustomers)

module.exports = customerRouter