import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";
import { Hotel } from './hotel';

export class Habitacion extends Model {

    public Tipo_De_Habitaciones!: string;
    
    
}

export interface HabitacionI {
    Tipo_De_Habitaciones: string;
}

Habitacion.init (

    {

        Tipo_De_Habitaciones:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

       

    },

    {
        tableName: "Habitaciones",
        sequelize: database,
        timestamps: true
    }


    

    
);

Hotel.hasMany(Habitacion);
Habitacion.belongsTo(Hotel);