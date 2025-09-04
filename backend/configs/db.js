import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://aman01:aman01@cluster0.pkrjxvq.mongodb.net/lms", {
            
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB connected")
    } catch (error) {
        console.log("DB error", error)
    }
}
export default connectDb