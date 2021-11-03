import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Agencia extends Model {

    public nombre!:    string;
    public direccion!: string;
    public telefono!:  string;
    public ciudad!:  string;
    public status! : boolean;
}

export interface AgenciaI {
    nombre:    string;
    direccion: string;
    telefono:  string;
    ciudad:  string;
    status : boolean;
}

Agencia.init (

    {

        nombre:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        direccion:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        telefono:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        ciudad:  {
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
        tableName: "Agencias",
        sequelize: database,
        timestamps: true
    }



);