import { IServiceBase } from './IServiceBase';
import { IdentityEntityBase } from 'entities/base';

export abstract class ServiceBase<TKey, TEntity extends IdentityEntityBase<TKey>>
   implements IServiceBase<TKey, TEntity> {

   entityList: TEntity[];

   create(entity: TEntity) {
      let result = this.entityList.push(entity);
      return result > 0;
   }

   update(id: TKey, entity: TEntity) {
      var index = this.entityList.map(function (x: TEntity) { return x.id; }).indexOf(id);

      if (index == -1)
         return false;

      this.entityList[index] = entity;
      return true;
   }

   delete(id: TKey) {
      var index = this.entityList.map(function (x: TEntity) { return x.id; }).indexOf(id);

      if (index == -1)
         return false;

      this.entityList.splice(index);
      return true;
   }

   read(id: TKey) {
      var index = this.entityList.map(function (x: TEntity) { return x.id; }).indexOf(id);
      if (index == -1)
         return null;

      return this.entityList[index];
   }

   list() {
      return this.entityList;
   }

}