import bcrypt from 'bcrypt';
import { Users } from "@models/model";

const SALT = 10;

interface createUserDTO{
  success: boolean,
  content?: { email: string, id: string },
  error?: Error 
}

export async function createUser(userEmail: string, userPassword: string){
  const response: createUserDTO = { success: false };
  
  const hashedPassword = await bcrypt.hash(userPassword, SALT);

  await Users.create({email: userEmail, password: hashedPassword})
    .then(user => {
      response.success = true;
      response.content = { email: user.email, id: user.id }
    })
    .catch(error => {
      response.success = false;
      response.error = error;
    })

    return response;
}