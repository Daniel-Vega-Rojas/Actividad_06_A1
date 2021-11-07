import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";
import { ProductSale } from './ProductSale';
import { Sale } from './sale';


export class Product extends Model {

    public nombre!:   string;
    public marca!:    string;
    public precio!:   string;
    public stockMin!: string 
    public cantidad!: string;
}

export interface ProductI {

    nombre :   string;
    marca:     string;
    precio:    string;
    stockMin:  string;
    cantidad:  string;
    

 

}

Product.init (

    {

        nombre:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        marca:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        precio:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        stockMin:  {
            type: DataTypes.STRING, 
            allowNull: false
        },

        cantidad:  {
            type: DataTypes.STRING, 
            allowNull: false
        },


    },


    {
        tableName: "Products",
        sequelize: database,
        timestamps: true
    }





);

Product.belongsToMany(Sale, { through: ProductSale});
Sale.belongsToMany(Product, { through: ProductSale});