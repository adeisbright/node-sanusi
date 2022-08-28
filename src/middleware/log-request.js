
const logRequest = async (req, res, next) => {
    console.log(`A ${req.method} request was sent to ${req.url} at ${new Date()}`) 
    next()
}

module.exports = logRequest