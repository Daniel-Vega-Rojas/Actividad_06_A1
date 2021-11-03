import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Persona extends Model {

    public nombre!:    string;
    public apellido!:  string;
    public direccion!: string;
    public telefono!:  string;
    public status! : boolean;
}

export interface PersonaI {
    nombre:    string;
    apellido:  string;
    direccion:  string;
    telefono:   string;
    status : boolean;
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
        
        status:  {
            type: DataTypes.ENUM,
            values:['Activado', 'Desactivado'], 
            defaultValue: 'Activado',
            allowNull: false
        },

    },

    {
        tableName: "Personas",
        sequelize: database,
        timestamps: true
    }



);