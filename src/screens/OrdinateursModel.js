import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

class Ordinateurs extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('gao.db')
    }

    static get tableName() {
        return 'ordinateurs'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
            name: { type: types.TEXT, not_null: true },
        }
    }
}
export default Ordinateurs;