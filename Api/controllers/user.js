const { User } = require("../Models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    const { name, gmail, password } = req.body;
   
    try {
        let user = await User.findOne({ gmail })

        if (user) return res.json({ message: "User already exist" })

        const hashPass = await bcrypt.hash(password,10)

        user = await User.create({ name, gmail, password:hashPass })
        res.json({ message: "User registered successfully !!", user })

    } catch (error) {
        res.json({ message: error })


    }

}

const login = async(req,res)=>{
    const {gmail,password} = req.body;
    try{
        let user = await User.findOne({gmail})

        if(!user) return  res.json({message:"User not exist..!"})

        const validPass = await bcrypt.compare(password,user.password)

        if(!validPass) return res.json({message:"Invalid Credentials"});

        const token = jwt.sign({userId:user._id},"!@#$%^&*()",{
            expiresIn:'1d'
        })

        res.json({message:`Welcome ${user.name}`,token})
    }catch(error){
        res.json({message:error.message})
}

}

const profile = async(req,res)=>{
    res.json({user:req.user})
}

module.exports = { register,login,profile }