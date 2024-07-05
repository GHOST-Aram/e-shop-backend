import { GenericController } from "../../../z-library/bases/generic-controller";
import { ProductDataAccess } from "../data-acess/data-access";
import { NextFunction, Response, Request } from "express";
import { Product } from "../data-acess/model";

export class ProductsController extends GenericController<ProductDataAccess>{
    
    public addNew = async(req: Request, res: Response, next: NextFunction) =>{
        
        let inputData = req.body
        const { productName, currentPrice, previousPrice, description }: Product = inputData;
        

        console.log('File: ', req.file)
        console.log('Body: ', req.body)
        if(req.file){
            const file: any = req.file
            const selectedFile: string = file.path 

            inputData = {
                productName,
                currentPrice,
                previousPrice,
                description,
                selectedFile,
            }
        }

        try {
            const newDocument = await this.dataAccess.createNew(inputData)
            this.respondWithCreatedResource(newDocument, res)
        } catch (error) {
            next(error)
        }   
    }
}