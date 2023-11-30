import { SupabaseClient } from '@supabase/supabase-js';

interface IRepository<T> {
    GetAll(): Promise<T[]>;
    GetById(id: number): Promise<T | null>;
    GetByIds(ids: number[]): Promise<T[]>;
    Insert(object: T): void;
    Update(id: number, updatedObject: T): void;
    Delete(id: number): void;
    GetCount(): Promise<number>;
}

declare class Repository implements IRepository<any> {
    private _supabaseClient;
    private _tableName;
    constructor(supabaseClient: SupabaseClient, tableName: string);
    GetAll(): Promise<any[]>;
    GetById(id: number): Promise<any | null>;
    GetByIds(ids: number[]): Promise<any[]>;
    Insert(object: any): Promise<void>;
    Update(id: number, updatedany: any): Promise<void>;
    Delete(id: number): Promise<void>;
    GetCount(): Promise<number>;
}

export { Repository as default };
