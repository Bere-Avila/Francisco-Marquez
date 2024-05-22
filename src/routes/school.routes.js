import { Router } from "express";
import { getIndex, getGrade1, getGrade2, getGrade3 } from "../controllers/school.controller.js";
const router = Router();

router.get('/', getIndex);
router.get('/grade1', getGrade1);
router.get('/grade2', getGrade2);
router.get('/grade3', getGrade3);

export default router;
