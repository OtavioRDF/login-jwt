import { Request, Response } from "express"
import { createUser } from "@services/createUser";

export async function SignUp(req: Request, res: Response){
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  if(!userEmail || !userPassword) 
    res.status(400).send({
      success: false,
      message: "Missing email/password fields"
    });
  
  const createUserResponse = await createUser(userEmail, userPassword);

  if(createUserResponse.success)
    res.status(201).send({
      success: true,
      content: createUserResponse.content
    });

  res.status(500).send({
    success: false,
    error: createUserResponse.error
  });
}
