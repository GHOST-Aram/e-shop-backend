import { Router } from "express";
import { ProductsController } from "../controllers/controller";

const router = Router()

export const routesWrapper = (controller: ProductsController) =>{
    return router
}