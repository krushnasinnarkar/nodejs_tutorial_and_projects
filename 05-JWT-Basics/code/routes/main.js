const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)  //as login route doent require authentication so we didnt added authMiddleware here or directly in app.js as its not require to al routes

module.exports = router
