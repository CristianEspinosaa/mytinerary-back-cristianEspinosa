import { Router } from "express";
import { allCities, citiesByName } from "../controller/cities/read.js";
import { createCity } from "../controller/cities/create.js";

const router = Router()

router.get('/all', allCities)
router.get('/name/:x', citiesByName)

router.create('create', createCity)


export default router