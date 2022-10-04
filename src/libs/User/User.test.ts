import {IUsers, User} from './index';

describe('User Lib Unit Tests', ()=>{

  it( 'should Create an Instance of User', ()=>{
      const UserInstance = new User();
      expect(UserInstance).toBeDefined();
  });
  it(' should Add a new User Item', ()=>{
      const UserInstance = new User();
      const UserItem : IUsers = {
        correo: 'danielamejia405@gmail.com',
        name: 'Daniela',
        user: 'Da',
        password: '123',
      };
      const index = UserInstance.addUser(UserItem);
      expect(index).toBe(0);
  });
});