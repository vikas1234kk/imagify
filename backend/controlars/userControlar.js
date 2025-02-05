import userModel from "../models/userModel.js"; // use this model create api like login log ou register
import bcrypt from 'bcrypt' // use this package password is save our database for hashing form
import jwt from 'jsonwebtoken' // use this jwt authnticate users

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // fetch data from any type of body will send 

        if (!name || !email || !password) {
            return res.json({ success: false, message: "missing details" }) // if not be send any name email pass so this response is execute
        }

        const salt = await bcrypt.genSalt(10) // and then user will be give email name and pass so generte a salt and convert asing format by using bcrype pakage
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = { // after that new vallue like for user send in body like name email and pass so will save our database
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET) // after that genrate a token for use authincate id will be auto generate mongodb 

        res.json({ success: true, token, user: { name: user.name } })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "user does not exist" })

        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET) 

            res.json({ success: true, token, user: { name: user.name } })

            
        } else {
            return res.json({ success: false, message: "invalid credetials" })

        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

const userCredit =  async (req, res) =>{
    try {
        const {userId} = req.body
        const user = await userModel.findById(userId)
        res.json({success: true, credits: user.creditBalance, user: {name: user.name}})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}
export {registerUser, loginUser, userCredit}