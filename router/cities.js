import { Router } from "express";
import { allCities, citiesByName } from "../controller/cities/read.js";

const router = Router()

router.get('/all', allCities)
router.get('/name/:x', citiesByName)


export default router