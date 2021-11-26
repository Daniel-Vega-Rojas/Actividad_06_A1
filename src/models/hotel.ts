import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";
import { Categoria } from './categoria';

export class Hotel extends Model {

    public Nombre_De_Hotel!: string;
    public Direccion!: string;
    public fecha_De_Construccion!: string;
    
}

export interface HotelI {
    Nombre_De_Hotel: string;
    Direccion: string;
    fecha_De_Construccion: string;
    
}

Hotel.init (

    {

        Nombre_De_Hotel:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        Direccion:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        fecha_De_Construccion: {
            type: DataTypes.STRING, 
            allowNull: false
        },
      




    },

    {
        tableName: "Hoteles",
        sequelize: database,
        timestamps: true
    }



    
);

Categoria.hasMany(Hotel);
Hotel.belongsTo(Categoria);