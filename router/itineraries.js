import { Router } from "express";
import { allItineraries, itinerariesByName } from "../controller/itineraries/read.js";

const router = Router()

router.get('/all',allItineraries)
router.get('/name/:x', itinerariesByName)


export default router