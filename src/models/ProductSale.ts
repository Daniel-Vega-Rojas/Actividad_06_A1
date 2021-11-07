import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";



export class ProductSale extends Model {

    public cantidad!: string;
    public precio!:   string;
    
}

export interface ProductSaleI {

    cantidad:  number;
    precio:    number;
    
    

 

}

ProductSale.init (

    {

        cantidad:  {
            type: DataTypes.INTEGER, 
            allowNull: false
        },


        precio:  {
            type: DataTypes.FLOAT, 
            allowNull: false
        },



    },


    {
        tableName: "ProductSales",
        sequelize: database,
        timestamps: true
    }





);

