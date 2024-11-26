import { Router } from "express";
import { allUsers, usersByName, userValid } from "../controller/users/read.js";
import { createManyUsers, createUser } from "../controller/users/register.js";
import { updateOne } from "../controller/users/update.js";
import validator from "../middlewares/validator.js";
import schemaUsersCreate from "../schemas/users/create.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const router = Router()

router.get('/all', passport.authenticate('jwt', {session : false}), allUsers)
router.get('/validateToken', passport.authenticate('jwt', {session : false}), userValid)
router.get('/name/:x', usersByName)

router.post('/register', validator(schemaUsersCreate), accountExist, createHash, createUser)
router.post('/createMany', createManyUsers)

router.put('/update',updateOne)

export default router