"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const Sequelize = require('sequelize');
const DB_NAME = 'db_hoteles';
const DB_USER = 'uchiha';
const DB_PASS = 'lolo12345';
exports.database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
exports.database.sync({ force: true })
    .then(function () {
    console.log('base de datos creada');
});
