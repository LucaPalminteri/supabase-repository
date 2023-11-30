export interface IRepository<T> {
    GetAll(): Promise<T[]>;
    GetById(id: number): Promise<T | null>;
    GetByIds(ids: number[]): Promise<T[]>;
    Insert(object: T): void;
    Update(id:number, updatedObject: T): void;
    Delete(id: number): void;
    Count(): Promise<number>;
}