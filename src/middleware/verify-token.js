
const verifyToken = async (req, res, next) => {
    const { token } = req.query
    if (token == null) {
        return res.status(400).json({
            message: "You need to provide the token", 
            body: {}, 
            sucess :false
        })
    }

    if (token !== "12345") {
        return res.status(400).json({
            message: "Please, provide correct token", 
            body: {}, 
            sucess :false
        })
    }
    next()
}

module.exports = verifyToken