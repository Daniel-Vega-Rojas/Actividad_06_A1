import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Categoria extends Model {

    public iva!: string;
    public descripcion!: string; 
     
}

export interface CategoriaI {
     iva: string;
     descripcion: string; 
    
}

Categoria.init (

    {

        iva:  {
            type: DataTypes.STRING, 
            allowNull: false
        },
        descripcion:  {
            type: DataTypes.STRING, 
            allowNull: false

        },
       


    },

    {
        tableName: "Categorias",
        sequelize: database,
        timestamps: true
    }



);