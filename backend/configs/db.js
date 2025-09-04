import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("❌ MONGO_URL is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ DB connected");
    } catch (error) {
        console.error("❌ DB error:", error.message);
        throw error;
    }
};

export default connectDb;
