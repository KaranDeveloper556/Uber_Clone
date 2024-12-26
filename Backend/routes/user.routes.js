const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const userController = require('../controllers/user.controller')

router.post('/register', [
    body('fullName.firstName').notEmpty().isLength({ min: 3 }).withMessage('First name is required'),
    body('fullName.lastName').notEmpty().isLength({ min: 3 }).withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.registerUser)

module.exports = router