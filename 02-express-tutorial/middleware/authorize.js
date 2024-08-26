const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'krushna') {
        req.user = { name: 'krushna', id: 1 }
        next()
    } else {
        res.status(401).send('Unaythorized')
    }
}

module.exports = authorize