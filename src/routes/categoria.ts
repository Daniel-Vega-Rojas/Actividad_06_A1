import { Request, Response, Application } from "express";
import {  CategoriaController } from '../controllers/categoria.controllers'


export class CategoriaRoutes {

    public categoriacontroller: CategoriaController = new CategoriaController();

    public routes(app: Application): void {
        // app.route('/categorai').get(this.cataegoriacontroller.index);
         app.route('/categorias').get(this.categoriacontroller.getCategorias);
         app.route('/categorias').post(this.categoriacontroller.createCategorias);
         app.route('/categorias/:id').patch(this.categoriacontroller.updateCategoria);
         app.route('/desactivarcategorias/:id').patch(this.categoriacontroller.deleteCategoria);
         app.route('/destroycategorias/:id').delete(this.categoriacontroller.destroyCategoria);

    }

}