import { IServiceBase } from 'services/base';
import { IComponentBase } from './IComponentBase';
import { IdentityEntityBase } from 'entities/base';

export class ComponentBase<TKey, TEntity extends IdentityEntityBase<TKey>, TService extends IServiceBase<TKey, TEntity>>
   implements IComponentBase<TKey, TEntity, TService> {

   entity: TEntity;

   constructor(public service: TService) {
   }

   create() {
      try {
         let result = this.service.create(this.entity);

         if (result)
            console.info('Entidade criada com sucesso!');
      }
      catch (e) {
         console.error(e);
      }
   }

   update() {
      try {
         let result = this.service.update(this.entity.id, this.entity);

         if (result)
            console.info('Entidade atualizada com sucesso!');
      }
      catch (e) {
         console.error(e);
      }

   }

   delete(id: TKey) {
      try {
         let result = this.service.delete(id);

         if (result)
            console.info('Entidade deletada com sucesso!');
      }
      catch (e) {
         console.error(e);
      }
   }

   read(id: TKey) {
      try {
         let entity = this.service.read(id);
         if (entity != null)
            console.info(entity);
      }
      catch (e) {
         console.error(e);
      }
   }

   list() {
      try {
         let objList = this.service.list();
         if (objList != null)
            console.info(objList);
      }
      catch (e) {
         console.error(e);
      }
   }
}