import * as SQLite from 'expo-sqlite';

//import {openDatabase} from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('UserDatabase.db');

export default db;