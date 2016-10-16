import { ComponentBase } from './base';
import { User } from 'entities/User';
import { UserService, IUserService } from 'services/UserService';

class UserComponent
   extends ComponentBase<number, User, IUserService>{

   constructor() {
      super(new UserService());
   }
}