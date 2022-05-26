import * as SQLite from 'expo-sqlite';

//import {openDatabase} from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({name: 'UserDatabase.db'});

export default db;