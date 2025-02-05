import mongoose from 'mongoose'


const connectDb = async () => {

    mongoose.connection.on('connected', () =>{
        console.log("Database connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/imagify`)
}

export default connectDb