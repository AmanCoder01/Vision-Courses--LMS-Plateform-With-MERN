// import mongoose from "mongoose";

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         console.log("DB connected")
//     } catch (error) {
//         console.log("DB error", error)
//     }
// }

// export default connectDb

import mongoose from "mongoose";

let isConnected = false; // connection state

const connectDb = async () => {
    if (isConnected) {
        // ✅ Already connected
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("✅ DB connected");
    } catch (error) {
        console.error("❌ DB connection error:", error.message);
        throw error;
    }
};

export default connectDb;
