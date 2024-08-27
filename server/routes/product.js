import express from "express";
import Product from "../models/Product.js";  // Ensure you're importing the correct model

const router = express.Router();

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();  // Corrected to use Product instead of KPI
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
