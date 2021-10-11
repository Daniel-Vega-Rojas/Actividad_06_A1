import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Persona extends Model {

    public nombre!:    string;
    public apellido!:  string;
    public direccion!: string;
    public telefono!:  string;
}

export interface PersonaI {
    nombre:    string;
    apellido:  string;
    direccion:  string;
    telefono:   string;
}

Persona.init (

    {

        nombre:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        apellido:  {
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

    },

    {
        tableName: "Personas",
        sequelize: database,
        timestamps: true
    }



);