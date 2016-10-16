import { IServiceBase } from 'services/base';

export interface IComponentBase<TKey, TEntity, TService extends IServiceBase<TKey, TEntity>> {
   entity: TEntity;
   service: TService;
   
   create(): void;
   update(): void;
   delete(id: TKey): void;
   read(id: TKey): void;
   list(): void;
}