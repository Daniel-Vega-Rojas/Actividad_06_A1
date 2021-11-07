import { Request, Response, Application } from "express";
import {  ProductController } from '../controllers/product.controllers'


export class ProductRoutes {

    public productcontroller: ProductController = new ProductController();

    public routes(app: Application): void {
        // app.route('/users').get(this.usercontroller.index);
         app.route('/product').get(this.productcontroller.getProduct);
         app.route('/product').post(this.productcontroller.createProduct);
         app.route('/product/:id').patch(this.productcontroller.updateProduct);
         app.route('/desactivarproducts/:id').patch(this.productcontroller.deleteProduct);
         app.route('/destroyproducts/:id').delete(this.productcontroller.destroyProduct);

    }

}