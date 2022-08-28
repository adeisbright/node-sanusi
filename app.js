require("dotenv").config() 
const express = require("express") 
const cors = require("cors") 
const compression = require("compression") 
const { default: helmet } = require("helmet") 
const customerRouter = require("./src/features/customer/customer.route")
const {logRequest} = require("./src/middleware")

const app = express() 
const PORT = process.env.PORT || 3100 
app.use(express.json()) 
app.use(cors()) 
app.use(compression()) 
app.use(helmet()) 
app.use(logRequest)
app.use(customerRouter) 


app.listen(PORT, () =>
    console.log(`Server listening on localhost:${PORT}`)
)

