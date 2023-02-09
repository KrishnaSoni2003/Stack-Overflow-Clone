import express from "express";

import { login, signup} from '../controllers/auth.js'

const router=express.Router();

router.post('/signup', signup)
router.post('/login',login)
// we write the functions in controllers to avoid many lines of code for readability

export default router;
