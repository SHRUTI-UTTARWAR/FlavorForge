const express = require("express")
const {register,login} = require("../controllers/user")

const {Authenticate} = require("../middlewares/auth")
const { profile } = require("../controllers/user")

const router = express.Router()

//user register
router.post("/register",register)

//user login
router.post("/login",login)

router.get('/user',Authenticate,profile)


module.exports = router