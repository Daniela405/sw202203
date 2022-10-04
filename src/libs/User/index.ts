import { getConnection } from "@models/sqlite/SqliteConn";
import { UserDao } from "@models/sqlite/UsersDao";
export interface IUsers {
     correo: string;
     name: string;
     user: string;
     password: string;
};
export class User {
  private dao: UserDao;
  public constructor(){
    getConnection()
      .then(conn=>{
        this.dao = new UserDao(conn);
      })
      .catch(ex=>console.error(ex));
  }
  // Consultas
  public getAllUser() {
    return this.dao.getUsers()
  }
  public getUserByIndex( index:number) {
      return this.dao.getUserById({_id:index});
  }

  public addUser( user:IUsers) {
    return this.dao.insertNewUser(user);
  }
  public updateUser( index:number, user:IUsers){
   return this.dao.update({_id:index}, user);
  }
  public deleteUser( index:number) {
    return this.dao.deleteUser({_id:index});
  }
}