import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";



export class ProductSale extends Model {


    public cantidad!:   number;
    public precio!:     number;
    public total!:      number;
    
}

export interface ProductSaleI {

    productId: number;
    saleId:    number;
    cantidad:  number;
    precio:    number;
    total:     number;
    
    

 

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

        total:  {
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

