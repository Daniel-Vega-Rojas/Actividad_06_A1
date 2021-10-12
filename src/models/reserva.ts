import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Reserva extends Model {

    public Fecha_Ingreso!: string;
    public Hora_Ingreso!: string;
    public Fecha_Salida!: string;
    
}

export interface ReservaI {
    Fecha_Ingreso: string;
    Hora_Ingreso: string;
    Fecha_Salida: string;
}

Reserva.init (

    {

        Fecha_Ingreso:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        Hora_Ingreso:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        Fecha_Salida: {
            type: DataTypes.STRING, 
            allowNull: false
        },




    },

    {
        tableName: "Reservas",
        sequelize: database,
        timestamps: true
    }



    
);