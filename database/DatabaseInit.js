import db from "./DatabaseInstance";
import DataManager from "./DataManager";

export default class DatabaseInit {
    
    seeder = [
        {
            email: "neville@teste.com",
            name: "Neville",
            username: "leoneville",
            password: "123456",
            balance: 0.0,
            
        },
        {
            email: "maria@teste.com",
            name: "Maria",
            username: "mariateste",
            password: "654321",
            balance: 0.0,
        },
        {
            email: "alejandro@teste.com",
            name: "Alejandro",
            username: "alejandroteste",
            password: "324156",
            balance: 0.0,
        },
    ];

    constructor() 
    {
        // init method
        this.initDb();
    }

    initDb()
    {
        const sql = [
            DataManager.createTableUser(),
            DataManager.createUser(this.seeder[0]),
        ];

        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}