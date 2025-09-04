import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://amancoder:amancoder@cluster0.haoorus.mongodb.net/lms")
        console.log("DB connected")
    } catch (error) {
        console.log("DB error", error)
    }
}
export default connectDb