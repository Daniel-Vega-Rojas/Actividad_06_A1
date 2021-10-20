import { Request, Response, Application } from "express";
import {  CategoriaController } from '../controllers/categoria.controllers'


export class CategoriaRoutes {

    public categoriacontroller: CategoriaController = new CategoriaController();

    public routes(app: Application): void {
        app.route('/categorias').get(this.categoriacontroller.getCategoria);
        app.route('/categorias').get(this.categoriacontroller.createCategoria);
        app.route('/categorias').get(this.categoriacontroller.borrarCategoria);

    }

}