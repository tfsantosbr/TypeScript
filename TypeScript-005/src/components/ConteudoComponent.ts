import { ComponentBase } from './base';
import { Conteudo } from 'entities/Conteudo';
import { ConteudoService, IConteudoService } from 'services/ConteudoService';

class UserComponent
   extends ComponentBase<string, Conteudo, IConteudoService>{

   constructor() {
      super(new ConteudoService());
   }
}