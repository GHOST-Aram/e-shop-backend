import { Router } from "express";
import { ProductsController } from "../controllers/controller";
import { productValidators, validateFile } from "./validation";
import { validator } from "../../../z-library/validation/validator";
import multer from "multer";
import { ProductDataAccess } from "../data-acess/data-access";
import { Product } from "../data-acess/model";

const router = Router()

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/product_images'); // specify the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // use the original filename
    },
  });
  
const upload = multer({ storage });
  
export const routesWrapper = (controller: ProductsController) =>{

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', 
        upload.single('file') ,
        // validateFile,
        ...productValidators,
        validator.handleValidationErrors,
        controller.addNew
    )

    return router
}

const dataAccess = new ProductDataAccess(Product)
const controller = new ProductsController(dataAccess, 'products')

export const productRoutes = routesWrapper(controller)