import { Request, Response } from "express"
import bcrypt from 'bcrypt';

export async function SignUp(req: Request, res: Response){
    const user = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    res.status(200)
}