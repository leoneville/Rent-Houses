import db from "./DatabaseInstance";

const sqlCreate = 'CREATE TABLE IF NOT EXISTES USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR (200), username VARCHAR (200), password VARCHAR (20), balance REAL)';

const sqlInsert = 'INSER INTO USER (email, username, password, balance) VALUES (?, ?, ?, ?)';

const sqlSelect = 'SELECT * FROM USER WHERE id = ?';

const sqlUpdate = 'UPDATE USER SET balance = ? WHERE id = ?';

const sqlDelete = 'DELETE FROM USER WHERE id = ?';

export default class DataManager {
    async createTableUser() 
    {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    }

    async openDatabase() 
    {
        return await db;
    }

    async createUser(user) 
    {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [user.email, user.username, user.password, user.balance]);
        });
    }

    async getUser(id)
    {
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
    }

    async deleteUser(id)
    {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }
}