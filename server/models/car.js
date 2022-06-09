import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: Number, required: true },
  brand: { type: String, required: true },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
