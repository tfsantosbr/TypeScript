import { IdentityEntityBase } from './base';

export class User
   implements IdentityEntityBase<number> {
   id: number;
   nome: string;
   dataNascimento: Date;
   sexo: SexoEnum;
}

export enum SexoEnum {
   Masculino = 1,
   Feminino = 2
} 