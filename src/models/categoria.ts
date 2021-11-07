import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Categoria extends Model {

    public iva!: string;
    public descripcion!: string; 
    public status! : boolean;   
}

export interface CategoriaI {
     iva: string;
     descripcion: string; 
     status : boolean;
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
        status:  {
            type: DataTypes.ENUM,
            values:['Activado', 'Desactivado'], 
            defaultValue: 'Activado',
            allowNull: false
        },


    },

    {
        tableName: "Categorias",
        sequelize: database,
        timestamps: true
    }



);