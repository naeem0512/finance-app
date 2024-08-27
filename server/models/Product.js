import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;

// Load the Currency type for Mongoose
loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,  // Divide by 100 to convert from cents to dollars
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,  // Divide by 100 to convert from cents to dollars
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",  // Ensure the Transaction model exists
      },
    ],
  },
  {
    timestamps: true,   // Automatically add createdAt and updatedAt fields
    toJSON: { getters: true },  // Ensure getters are applied when converting to JSON
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
