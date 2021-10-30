
import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class User extends Model {

    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public contraseña!: string;
    public status! : boolean;
}

export interface UserI {

    nombre : string;
    apellido: string;
    correo: string;
    contraseña: string;
    status: boolean;

 

}

User.init (

    {

        nombre:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        apellido:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        correo:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        contraseña:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        status:  {
            type: DataTypes.ENUM,
            values:['Activado', 'Desactivado'], 
            defaultValue: 'Activado',
            allowNull: false
        },


    },

    {
        tableName: "Users",
        sequelize: database,
        timestamps: true
    }


    




);
