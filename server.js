import dotenv from "dotenv";
import app from "./utils/expressInstance.utils.js";
import express from "express";
import errorHandler from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";

// * ROUTES
import indexRoutes from "./routes/index.routes.js";

dotenv.config();
connectDB();

// *MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// * SERVER PORT
const PORT = process.env.PORT || 5000;

// * ROUTES MIDDLEWARE
app.use("/api/goals", indexRoutes);

// * LAUNCH SERVER
app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));
