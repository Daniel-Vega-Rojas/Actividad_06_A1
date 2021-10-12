import  express, { Application }  from "express";
import morgan from 'morgan';
import { Routes } from '../routes/index';

export class App {

    app: Application;
    public routePrv: Routes = new Routes();

    constructor (
        private port?: number | string

    ){
        this.app = express();
        this.settings();
        this.middleawares();
        this.routes();
    }

    private middleawares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded( {extended: false }))
    }

    private routes (){
        this.routePrv.userRoutes.routes(this.app)
        this.routePrv.habitacionRoutes.routes(this.app)
        this.routePrv.personaRoutes.routes(this.app)
        this.routePrv.agenciaRoutes.routes(this.app)
        this.routePrv.categoriaRoutes.routes(this.app)
        this.routePrv.hotelRoutes.routes(this.app)
        this.routePrv.reservaRoutes.routes(this.app)
        
    }

    private settings(){
        this.app.set('port', this.port || 3000)

    }

    async listen(){
       await  this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}