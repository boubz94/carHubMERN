import express from "express";

import { getCars, createCar } from "../controllers/carController.js";

const router = express.router();

router.get("/", getCars);
router.post("/", createCar);

export default router;
