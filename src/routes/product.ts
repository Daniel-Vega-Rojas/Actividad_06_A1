import { Request, Response, Application } from "express";
import {  ProductController } from '../controllers/product.controllers'


export class ProductRoutes {

    public productcontroller: ProductController = new ProductController();

    public routes(app: Application): void {
        // app.route('/users').get(this.usercontroller.index);
         app.route('/productos').get(this.productcontroller.getProduct);
         app.route('/productos').post(this.productcontroller.createProduct);
         app.route('/productos/:id').patch(this.productcontroller.updateProduct);
         app.route('/desactivarproductos/:id').patch(this.productcontroller.deleteProduct);
         app.route('/destroyproductos/:id').delete(this.productcontroller.destroyProduct);

    }

}