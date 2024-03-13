import mongoose from 'mongoose'

const connectDB = async (uri: string) => {
    await mongoose.connect(uri)
    console.log('MongoDb Connected')
}
export {connectDB}
