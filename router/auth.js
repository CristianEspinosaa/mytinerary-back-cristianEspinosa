import { Router } from "express";
import singIn from "../controller/auth/singIn.js";
import signinGoogle from "../controller/auth/signinGoogle.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import singout from "../controller/auth/singout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";

const router = Router()

router.post('/signin', accountNoExist, isValidPassword, generateToken, singIn)
router.post('/singout', passport.authenticate('jwt', { session: false }), singout)

router.get(
    '/signin/google',
    passportGoogle.authenticate('google', { scope: ['profile', 'email'], session: false })
)

router.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signinGoogle
)


export default router