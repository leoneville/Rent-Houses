import db from './DatabaseInstance';

const sqlCreate = 'CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR (100),  email VARCHAR (200), password VARCHAR (50))';
const sqlInsert = 'INSERT INTO USER (nome, email, password) VALUES (?, ?, ?)';
const sqlSelect = 'SELECT * FROM USER WHERE email = ?';
const sqlUpdate = 'UPDATE USER SET nome = ?, email = ?, password = ? WHERE email = ?';
const sqlDelete = 'DELETE FROM USER WHERE email = ?';

export default class DataManager {

    static async createTableUser() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    }

    static async openDatabase() {
        return await db;
    }

    static async createUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [user.name, user.email, user.password]);
        });
    }

    static async getUser(email) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [email], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }

    static async deleteUser(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    static async updateUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [user.email, user.password]);
        });
    }
}