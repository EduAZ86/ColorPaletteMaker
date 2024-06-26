import mongoose from "mongoose";

mongoose.set("strictQuery", false)

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGODB_URI as string)
}
export default connectDB