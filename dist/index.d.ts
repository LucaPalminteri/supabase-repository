import { SupabaseClient } from '@supabase/supabase-js';

interface IRepository<T> {
    GetAll(): Promise<T[]>;
    GetById(id: number): Promise<T | null>;
    GetByIds(ids: number[]): Promise<T[]>;
    Insert(object: T): void;
    Update(id: number, updatedObject: T): void;
    Delete(id: number): void;
    Count(): Promise<number>;
}

/**
 * Represents a repository for interacting with data stored in Supabase.
 * Implements the IRepository interface to define common data access methods.
 *
 * @class
 * @implements {IRepository<any>}
 */
declare class Repository implements IRepository<any> {
    private _supabaseClient;
    private _tableName;
    /**
     * Creates an instance of Repository.
     *
     * @constructor
     * @param {SupabaseClient} supabaseClient - The Supabase client for data interaction.
     * @param {string} tableName - The name of the table to interact with.
     */
    constructor(supabaseClient: SupabaseClient, tableName: string);
    /**
     * Retrieves all records from the specified table in Supabase.
     *
     * @returns {Promise<any[]>} A promise that resolves to an array of records.
     * @throws {Error} If an error occurs during the data retrieval process.
     *
     * @example
     * // Usage example:
     * try {
     *   const allRecords = await yourInstance.GetAll();
     *   console.log('All Records:', allRecords);
     * } catch (error) {
     *   console.error('Error getting all records:', error.message);
     * }
     */
    GetAll(): Promise<any[]>;
    /**
     * Retrieves a single record from the specified table in Supabase based on the provided ID.
     *
     * @param {number} id - The unique identifier of the record to retrieve.
     * @returns {Promise<any | null>} A promise that resolves to the retrieved record, or `null` if no matching record is found.
     * @throws {Error} If an error occurs during the data retrieval process.
     *
     * @example
     * // Usage example:
     * try {
     *   const recordId = 1;
     *   const record = await yourInstance.GetById(recordId);
     *   console.log('Record by ID:', record);
     * } catch (error) {
     *   console.error('Error getting record by ID:', error.message);
     * }
     */
    GetById(id: number): Promise<any | null>;
    /**
     * Retrieves records from the specified table in Supabase based on an array of IDs.
     *
     * @param {number[]} ids - An array of unique identifiers of the records to retrieve.
     * @returns {Promise<any[]>} A promise that resolves to an array of matching records.
     * @throws {Error} If an error occurs during the data retrieval process.
     *
     * @example
     * // Usage example:
     * try {
     *   const recordIds = [1, 2, 3];
     *   const records = await yourInstance.GetByIds(recordIds);
     *   console.log('Records by IDs:', records);
     * } catch (error) {
     *   console.error('Error getting records by IDs:', error.message);
     * }
     */
    GetByIds(ids: number[]): Promise<any[]>;
    /**
     * Inserts a new record into the specified table in Supabase.
     *
     * @param {any} object - The data object to insert.
     * @returns {Promise<void>} A promise that resolves when the insertion is successful.
     * @throws {Error} If an error occurs during the data insertion process.
     *
     * @example
     * // Usage example:
     * try {
     *   const newRecord = object;
     *   await yourInstance.Insert(newRecord);
     *   console.log('Record inserted successfully');
     * } catch (error) {
     *   console.error('Error inserting record:', error.message);
     * }
     */
    Insert(object: any): Promise<void>;
    /**
     * Updates a record in the specified table in Supabase based on the provided ID.
     *
     * @param {number} id - The unique identifier of the record to update.
     * @param {any} updatedObject - The updated data object.
     * @returns {Promise<void>} A promise that resolves when the update is successful.
     * @throws {Error} If an error occurs during the data update process.
     *
     * @example
     * // Usage example:
     * try {
     *   const recordId = 1;
     *   const updatedData = object;
     *   await yourInstance.Update(recordId, updatedData);
     *   console.log('Record updated successfully');
     * } catch (error) {
     *   console.error('Error updating record:', error.message);
     * }
     */
    Update(id: number, updatedObject: any): Promise<void>;
    /**
     * Deletes a record from the specified table in Supabase based on the provided ID.
     *
     * @param {number} id - The unique identifier of the record to delete.
     * @returns {Promise<void>} A promise that resolves when the deletion is successful.
     * @throws {Error} If an error occurs during the data deletion process.
     *
     * @example
     * // Usage example:
     * try {
     *   const recordId = 1;
     *   await yourInstance.Delete(recordId);
     *   console.log('Record deleted successfully');
     * } catch (error) {
     *   console.error('Error deleting record:', error.message);
     * }
     */
    Delete(id: number): Promise<void>;
    /**
     * Retrieves the count of records in the specified table in Supabase.
     *
     * @returns {Promise<number>} A promise that resolves to the count of records.
     * @throws {Error} If an error occurs during the data retrieval process.
     *
     * @example
     * // Usage example:
     * try {
     *   const recordCount = await yourInstance.Count();
     *   console.log('Record count:', recordCount);
     * } catch (error) {
     *   console.error('Error getting record count:', error.message);
     * }
     */
    Count(): Promise<number>;
}

export { Repository as default };
