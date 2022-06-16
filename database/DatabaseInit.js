import db from "./DatabaseInstance";
import DataManager from "./DataManager";

export default class DatabaseInit {

    constructor() 
    {
        // init method
        this.initDb();
    }

    initDb()
    {
        const sql = [
            DataManager.createTableUser()
        ];

        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}