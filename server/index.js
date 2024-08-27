import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();  // Load environment variables from .env file
const app = express();  // Initialize Express app
app.use(express.json());  // Parse JSON bodies
app.use(helmet());  // Set security-related HTTP headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  // Enable CORS with cross-origin policy
app.use(morgan("common"));  // HTTP request logger middleware
app.use(bodyParser.json());  // Parse JSON bodies (needed for POST requests)
app.use(bodyParser.urlencoded({ extended: false }));  // Parse URL-encoded bodies
app.use(cors());  // Enable CORS for all requests

/* ROUTES */
app.use("/kpi", kpiRoutes);  // Use KPI routes
app.use("/product", productRoutes);  // Use Product routes
app.use("/transaction", transactionRoutes);  // Use Transaction routes

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;  // Use environment variable for port or default to 3000
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    // Ensure the app listens on all network interfaces by specifying '0.0.0.0'
    app.listen(PORT, '0.0.0.0', () => console.log(`Server Port: ${PORT}`)); 

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // Uncomment the following lines to insert data into the database
    //await mongoose.connection.db.dropDatabase();  // Drop existing database (use with caution)
    //await KPI.insertMany(kpis);  // Insert KPI data
    //await Product.insertMany(products);  // Insert Product data
    //await Transaction.insertMany(transactions);  // Insert Transaction data

  })
  .catch((error) => console.log(`${error} did not connect`));  // Log connection errors