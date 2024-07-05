import { GenericController } from "../../../z-library/bases/generic-controller";
import { ProductDataAccess } from "../data-acess/data-access";
import { NextFunction, Response, Request } from "express";
import { Product } from "../data-acess/model";

export class ProductsController extends GenericController<ProductDataAccess>{
    
    public addNew = async(req: Request, res: Response, next: NextFunction) =>{
        
        let inputData: Product = req.body
        const file: any = req.file
        
        try {
            const newDocument = await this.dataAccess.createNew({
                ...inputData, 
                image:{
                    name: file.originalname,
                    data: file.buffer,
                    contentType: file.mimetype
                }
            })

            this.respondWithCreatedResource(newDocument, res)
        } catch (error) {
            next(error)
        }   
    }
}