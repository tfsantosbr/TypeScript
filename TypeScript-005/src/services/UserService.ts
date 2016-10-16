import { User } from 'entities/user';
import { IServiceBase, ServiceBase } from './base';

export interface IUserService
   extends IServiceBase<number, User> {
}

export class UserService
   extends ServiceBase<number, User>
   implements IUserService {
}