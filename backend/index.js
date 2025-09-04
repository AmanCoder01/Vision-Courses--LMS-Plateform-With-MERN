import express from "express"
import dotenv from "dotenv"
import connectDb from "./configs/db.js"
import authRouter from "./routes/authRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import courseRouter from "./routes/courseRoute.js"
import paymentRouter from "./routes/paymentRoute.js"
import aiRouter from "./routes/aiRoute.js"
import reviewRouter from "./routes/reviewRoute.js"
dotenv.config()

let port = process.env.PORT
let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://vision-courses.vercel.app",  // frontend URL
    // origin: "http://localhost:5173",  // frontend URL
    credentials: true,                // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors({
    origin: "https://vision-courses.vercel.app",
    credentials: true,
}));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/course", courseRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/ai", aiRouter)
app.use("/api/review", reviewRouter)


app.get("/", (req, res) => {
    res.send("Hello From Server")
})
// ✅ Connect DB first, then start server
const startServer = async () => {
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`)
        })
    } catch (error) {
        console.error("❌ Failed to connect to DB", error.message)
        process.exit(1)
    }
}

startServer()