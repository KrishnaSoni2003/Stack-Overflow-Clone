import express from "express";

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from "../middlewares/auth.js";

const router = express.Router();

// patch() is used to update a record in database.
// since, we have the question and array of answers in same record, we update the record for answers.
router.patch('/post/:id',auth, postAnswer)
router.patch('/delete/:id',auth, deleteAnswer)

export default router