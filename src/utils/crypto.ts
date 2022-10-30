import * as bcrypt from 'bcrypt';

export const getPassword = (password:string)=> {
  return bcrypt.hashSync(password, 10) as string;
}

export const checkPassword = (rawPassword:string, password: string) => {
  return bcrypt.compareSync(rawPassword, password);
}