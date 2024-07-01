import { GenericController } from "../../z-library/bases/generic-controller";
import { ProductDataAccess } from "../data-acess/data-access";
import { NextFunction, Response, Request } from "express";

export class ProductsController extends GenericController<ProductDataAccess>{
    public addNew = async(req: Request, res: Response, next: NextFunction) =>{
        const inputData = req.body

        console.log('Body: ',inputData)
        console.log('File: ', req.file)

        try {
            const newDocument = await this.dataAccess.createNew(inputData)
            this.respondWithCreatedResource(newDocument, res)
        } catch (error) {
            next(error)
        }   
    }
}