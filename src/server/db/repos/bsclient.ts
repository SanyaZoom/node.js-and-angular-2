import {IDatabase, IMain} from 'pg-promise';
import sqlProvider = require('../sql');

var sql = sqlProvider.bsclient;

/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */

export class Repository {

    constructor(db:any, pgp:IMain) {
        this.db = db;
        this.pgp = pgp;
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db:IDatabase<any>;

    private pgp:IMain;

    // Creates the table;
    create = () =>
        this.db.none(sql.create);

    // Returns all user records;
    all = () =>
        this.db.any('SELECT * from bs.client');
}