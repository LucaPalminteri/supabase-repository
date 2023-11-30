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
  constructor(supabaseClient, tableName) {
    this._supabaseClient = supabaseClient;
    this._tableName = tableName;
  }
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
  Update(id, updatedany) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this._supabaseClient.from(this._tableName).update(updatedany).eq("id", id);
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
  GetCount() {
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
