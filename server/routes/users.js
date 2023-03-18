import express from "express";

import { login, signup, payment} from '../controllers/auth.js'
import {getAllUsers, updateProfile} from '../controllers/users.js'
import auth from "../middlewares/auth.js";

const router=express.Router();

router.post('/signup', signup)
router.post('/login',login)
router.post('/payment',payment);
// we write the functions in controllers to avoid many lines of code for readability

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id',auth, updateProfile)

export default router;
