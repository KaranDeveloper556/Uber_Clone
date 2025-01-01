const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const userController = require('../controllers/user.controller')
const authmiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('fullName.firstName').notEmpty().isLength({ min: 3 }).withMessage('First name is required'),
    body('fullName.lastName').notEmpty().isLength({ min: 3 }).withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.registerUser)

router.post('/login', [
    body('email').notEmpty().isEmail().withMessage('Invalid Email'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Incorrect password')
], userController.loginUser)

router.get('/profile', authmiddleware.authUser, userController.getUserProfile)
router.get('/logout', authmiddleware.authUser, userController.getUserProfile)

module.exports = router