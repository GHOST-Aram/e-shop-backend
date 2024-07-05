import mongoose, { Document, HydratedDocument, Model, Schema } from 'mongoose'

export interface Product {
	productName: string
	currentPrice: number
	previousPrice: number
	description: string
	image: {
		name: string,
		data: Buffer,
		contentType: string
	}
}

export type ProductModel = Model<Product>

const productSchema: Schema = new Schema<Product, ProductModel>({
    productName: { 
		type: String, 
		required: true 
	},
    currentPrice: { 
		type: Number, 
		required: true 
	},
    previousPrice: { 
		type: Number, 
		required: true 
	},
    description: { 
		type: String, 
		required: true 
	},
    image: { 
		name: String,
		data: Buffer,
		contentType: String 
	},
})

export type HydratedProductDoc = HydratedDocument<Product>

export const Product: ProductModel = mongoose.model<Product, ProductModel>(
  'Product', productSchema)
