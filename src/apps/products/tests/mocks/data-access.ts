import { Accessible } from "../../../../z-library/bases/accessible";
import { ProductModel, Product, HydratedProductDoc } from "../../data-acess/model";
import { Paginator } from "../../../../z-library/HTTP/http-response";
import { productData } from "./test-data";

const AVAILABLE_ID = '64c9e4f2df7cc072af2ac9e4'

export class ProductDataAccess implements Accessible{
    public model: ProductModel

    constructor(model: ProductModel){
        this.model = model
    }

    public createNew = jest.fn(async(data: Product): Promise<HydratedProductDoc> =>{
        return new this.model(data)
    })

    public findByReferenceId = jest.fn(async(refId: string): Promise<HydratedProductDoc | null> =>{
        return refId === AVAILABLE_ID ? new this.model(productData) : null
    })

    public findWithPagination = jest.fn(async(paginator: Paginator): Promise<HydratedProductDoc[]> => {
       return createFakeProductDocs(paginator.limit)
    })

    public findByIdAndUpdate = jest.fn(async(id: string, updateDoc: any):Promise<HydratedProductDoc | null> =>{
        return id === AVAILABLE_ID ? new this.model(productData) : null
    })

    public findByIdAndDelete = jest.fn(async(id: string): Promise<HydratedProductDoc | null> =>{
        return id === AVAILABLE_ID ? new this.model(productData) : null
    })
}

const createFakeProductDocs = (limit: number): HydratedProductDoc[] =>{
    const products: HydratedProductDoc[] = []

    while(limit > 0){
        products.push(new Product(productData))
        limit --
    }

    return products
}