import { Router } from "express";
import { allCities, citiesByName } from "../controller/cities/read.js";
import { createCity } from "../controller/cities/create.js";
import { deleteCity } from "../controller/cities/delete.js"
import { updateOne } from "../controller/itineraries/update.js";
 
const router = Router()

router.get('/all', allCities)
router.get('/name/:x', citiesByName)

router.post('/create', createCity)
router.delete('/delete', deleteCity)
router.put('/update', updateOne)



export default router