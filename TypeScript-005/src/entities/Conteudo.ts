import { IdentityEntityBase } from './base';

export class Conteudo
   extends IdentityEntityBase<string> {
   titulo: string;
   corpo: string;
}