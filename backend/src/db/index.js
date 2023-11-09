import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`Database connected ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Database not connected ${error.message}`)
        process.exit(1)
    }
}

export default connectDB