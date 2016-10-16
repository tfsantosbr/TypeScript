export interface IServiceBase<TKey, TEntity> {
   create(entity: TEntity): boolean;
   update(id: TKey, entity: TEntity): boolean;
   delete(id: TKey): boolean;
   read(id: TKey): TEntity;
   list(): TEntity[];
}