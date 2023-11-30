import { SupabaseClient } from "@supabase/supabase-js";
import { IRepository } from "../interfaces/IRepository";

class Repository implements IRepository<any> {

    private _supabaseClient: SupabaseClient;
    private _tableName: string;

    constructor(supabaseClient: SupabaseClient, tableName: string) {
        this._supabaseClient = supabaseClient;
        this._tableName = tableName;
    }

    public async GetAll() {
        try {
            const { data, error } = await this._supabaseClient
                .from(this._tableName)
                .select();
            if (error) {
                throw new Error(`Error fetching data: ${error.message}`);
            }
            return data;
        } catch (error) {
            console.error('Error in getAll:', error);
            throw error;
        }
    }

    public async GetById(id: number): Promise<any | null> {
        try {
            const { data, error } = await this._supabaseClient
                .from(this._tableName)
                .select()
                .eq('id', id);
            if (error) {
                throw new Error(`Error fetching games: ${error.message}`);
            }
            return data[0];
        } catch (error) {
            console.error('Error in GetGameById:', error);
            throw error;
        }
    }

    public async GetByIds(ids: number[]): Promise<any[]> {
        try {
            const { data, error } = await this._supabaseClient
                .from(this._tableName)
                .select()
                .in('id', ids);
            if (error) {
                throw new Error(`Error fetching games: ${error.message}`);
            }
            return data;

        } catch (error) {
            console.error('Error in GetGameByCode:', error);
            throw error;
        }
    }

    public async Insert(object: any): Promise<void> {
        try {
            const { data, error } = await this._supabaseClient
                .from(this._tableName)
                .insert(object);
            if (error) {
                throw new Error(`Error inserting data: ${error.message}`);
            }
        } catch (error) {
            console.error('Error in insert:');
            throw error;
        }
    }

    public async Update(id: number, updatedany: any): Promise<void> {
        try {
            const { data, error } = await this._supabaseClient
                .from(this._tableName)
                .update(updatedany)
                .eq('id', id);
            if (error) {
                throw new Error(`Error updating data: ${error.message}`);
            }
            return data![0];
        } catch (error) {
            console.error('Error in edit:');
            throw error;
        }
    }

    public async Delete(id: number): Promise<void> {
        try {
            const { error } = await this._supabaseClient
                .from(this._tableName)
                .delete()
                .eq('id', id);
            if (error) {
                throw new Error(`Error deleting data: ${error.message}`);
            }
        } catch (error) {
            console.error('Error in delete:');
            throw error;
        }
    }

    public async Count(): Promise<number> {
        try {
            const { count, error } = await this._supabaseClient
                .from(this._tableName)
                .select('*', { count: 'exact', head: true })

            if (error) {
                throw new Error(`Error fetching data: ${error.message}`);
            }
            return count ?? 0;
        } catch (error) {
            console.error('Error in GetCount:');
            throw error;
        }
    }

}

export default Repository