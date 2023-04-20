import { Router  } from "express";
import { SignUp } from "@api/middlewares/signup";

export const router = Router();

router.post('/signup', SignUp);
// router.post('/login', Login);
// router.post('/logout', Logout);