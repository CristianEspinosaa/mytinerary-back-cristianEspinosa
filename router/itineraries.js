import { Router } from "express";
import { allItineraries, itinerariesByName } from "../controller/itineraries/read.js";
import { createCity } from "../controller/cities/create.js";
import { deleteCity } from "../controller/cities/delete.js";
import { updateOne } from "../controller/itineraries/update.js";

const router = Router()

router.get('/all',allItineraries)
router.get('/name/:x', itinerariesByName)

router.post('/create', createCity)
router.put('/update', updateOne)
router.delete('/delete', deleteCity)




export default router