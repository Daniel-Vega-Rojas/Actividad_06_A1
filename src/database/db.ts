const Sequelize = require('sequelize');

const DB_NAME = 'db_hoteles';

const DB_USER = 'uchiha';

const DB_PASS = 'lolo12345'

export const database = new Sequelize(

    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost', 
        dialect: 'mysql',
        port: 3306
    }
)

database.sync( { force: true } )
    .then(function () {
        console.log ('                         O┬  ╔╗ ╔═╗╔═╗╔═╗  ╔╦╗╔═╗  ╔╦╗╔═╗╔╦╗╔═╗╔═╗  ╔═╗╦═╗╔═╗╔═╗╔╦╗╔═╗  O┬ ' )
        console.log ('                         ┌┘  ╠╩╗╠═╣╚═╗║╣    ║║║╣    ║║╠═╣ ║ ║ ║╚═╗  ║  ╠╦╝║╣ ╠═╣ ║║╠═╣  ┌┘ ' )
        console.log ('                         ┴O  ╚═╝╩ ╩╚═╝╚═╝  ═╩╝╚═╝  ═╩╝╩ ╩ ╩ ╚═╝╚═╝  ╚═╝╩╚═╚═╝╩ ╩═╩╝╩ ╩  ┴O ' )
        console.log ('                                O┬   ╔═╗╔═╗╦═╗╦═╗╔═╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╗╔╔╦╗╔═╗   O┬         ' )
        console.log ('                                ┌┘   ║  ║ ║╠╦╝╠╦╝║╣ ║   ║ ╠═╣║║║║╣ ║║║ ║ ║╣    ┌┘           ' )
        console.log ('                                ┴O   ╚═╝╚═╝╩╚═╩╚═╚═╝╚═╝ ╩ ╩ ╩╩ ╩╚═╝╝╚╝ ╩ ╚═╝   ┴O          ' )
      
    })
