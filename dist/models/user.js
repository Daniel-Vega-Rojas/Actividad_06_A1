"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
// const Sequelize = require('sequelize');
const db_1 = require("../database/db");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "Users",
    sequelize: db_1.database,
    timestamps: true
});
