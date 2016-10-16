import { IIdentityEntityBase } from './IIdentityEntityBase';

export abstract class IdentityEntityBase<T> implements IIdentityEntityBase<T> {
   id: T;
}