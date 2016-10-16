import { Conteudo } from 'entities/conteudo';
import { IServiceBase, ServiceBase } from './base';

export interface IConteudoService
   extends IServiceBase<string, Conteudo> {
}

export class ConteudoService
   extends ServiceBase<string, Conteudo>
   implements IConteudoService {
}