import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";
import { Hotel } from './hotel';
import { Persona } from './persona';
import { Agencia } from './agencia';  



export class Reserva extends Model {

    public Fecha_Ingreso!: Date;
    public Hora_Ingreso!: string;
    public Fecha_Salida!: Date;
  
}

export interface ReservaI {
    Fecha_Ingreso: Date;
    Hora_Ingreso: string;
    Fecha_Salida: Date;
    
}

Reserva.init (

    {

        Fecha_Ingreso:  {
            type: DataTypes.DATE, 
            allowNull: false
        },

        Hora_Ingreso:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        Fecha_Salida: {
            type: DataTypes.DATE, 
            allowNull: false
        },
       


    },

    {
        tableName: "Reservas",
        sequelize: database,
        timestamps: true
    }

);


Hotel.hasMany(Reserva);
Reserva.belongsTo(Hotel);

Persona.hasMany(Reserva);
Reserva.belongsTo(Persona);

Agencia.hasMany(Reserva);
Reserva.belongsTo(Agencia);