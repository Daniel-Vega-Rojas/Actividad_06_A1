import {Model, DataTypes } from 'sequelize';
// const Sequelize = require('sequelize');
import {database} from "../database/db";
import { User} from './user';

export class Sale extends Model {

    public id!: number;
    public fecha!: Date;
    public descuento!: number;
    public subtotal!: number;
    public iva!: number 
    public granTotal!: number;
}

export interface SaleI {

    UserId: number;
    fecha : Date;
    descuento: number;
    subtotal: number;
    iva: number;
    granTotal: number;
    
    

 

}

Sale.init (

    {

        fecha:  {
            type: DataTypes.DATE, 
            allowNull: false
        },

        descuento:  {
            type: DataTypes.BIGINT, 
            allowNull: false
        },

        subtotal:  {
            type: DataTypes.BIGINT, 
            allowNull: false
        },

        iva:  {
            type: DataTypes.BIGINT, 
            allowNull: false
        },

        granTotal:  {
            type: DataTypes.BIGINT, 
            allowNull: false
        },


    },


    {
        tableName: "Sales",
        sequelize: database,
        timestamps: true
    }





);

User.hasMany(Sale);
Sale.belongsTo(User);