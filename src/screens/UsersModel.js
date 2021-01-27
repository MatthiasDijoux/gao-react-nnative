import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

class Users extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('gao.db')
    }

    static get tableName() {
        return 'users'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
            name_user: { type: types.TEXT, not_null: true },
            id_ordinateur: { type: types.INTEGER, not_null: true }
        }
    }
}
export default Users;