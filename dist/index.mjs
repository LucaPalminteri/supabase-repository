var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// lib/classes/Repository.ts
var Repository = class {
  /**
   * Creates an instance of Repository.
   * 
   * @constructor
   * @param {SupabaseClient} supabaseClient - The Supabase client for data interaction.
   * @param {string} tableName - The name of the table to interact with.
   */
  constructor(supabaseClient, tableName) {
    this._supabaseClient = supabaseClient;
    this._tableName = tableName;
  }
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
  GetAll() {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).select();
        if (error) {
          throw new Error(`Error fetching data: ${error.message}`);
        }
        return data;
      } catch (error) {
        console.error("Error in getAll:", error);
        throw error;
      }
    });
  }
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
  GetById(id) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).select().eq("id", id);
        if (error) {
          throw new Error(`Error fetching games: ${error.message}`);
        }
        return data[0];
      } catch (error) {
        console.error("Error in GetGameById:", error);
        throw error;
      }
    });
  }
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
  GetByIds(ids) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).select().in("id", ids);
        if (error) {
          throw new Error(`Error fetching games: ${error.message}`);
        }
        return data;
      } catch (error) {
        console.error("Error in GetGameByCode:", error);
        throw error;
      }
    });
  }
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
  Insert(object) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).insert(object);
        if (error) {
          throw new Error(`Error inserting data: ${error.message}`);
        }
      } catch (error) {
        console.error("Error in insert:");
        throw error;
      }
    });
  }
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
  Update(id, updatedObject) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).update(updatedObject).eq("id", id);
        if (error) {
          throw new Error(`Error updating data: ${error.message}`);
        }
        return data[0];
      } catch (error) {
        console.error("Error in edit:");
        throw error;
      }
    });
  }
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
  Delete(id) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this._supabaseClient.from(this._tableName).delete().eq("id", id);
        if (error) {
          throw new Error(`Error deleting data: ${error.message}`);
        }
      } catch (error) {
        console.error("Error in delete:");
        throw error;
      }
    });
  }
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
  Count() {
    return __async(this, null, function* () {
      try {
        const { count, error } = yield this._supabaseClient.from(this._tableName).select("*", { count: "exact", head: true });
        if (error) {
          throw new Error(`Error fetching data: ${error.message}`);
        }
        return count != null ? count : 0;
      } catch (error) {
        console.error("Error in GetCount:");
        throw error;
      }
    });
  }
};
var Repository_default = Repository;

// lib/index.ts
var lib_default = Repository_default;
export {
  lib_default as default
};
