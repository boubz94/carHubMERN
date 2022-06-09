import express from "express";
import mongoose from "mongoose";
import { restart } from "nodemon";

import Car from "../models/car.js";

const router = express.router();

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    console.log("cars => ", cars);
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCar = async (req, res) => {
  const car = req.body;
  const newCar = new Car({ ...car });

  try {
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export default router;
