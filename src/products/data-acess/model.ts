import mongoose, { Document, HydratedDocument, Model, Schema } from 'mongoose'

export interface Product extends Document {
	productName: string
	currentPrice: number
	previousPrice: number
	description: string
	selectedFile: string
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
    selectedFile: { 
		type: String, 
	}, // assuming the file is stored as a path or URL
})

export type HydratedProductDoc = HydratedDocument<Product>

export const Product: ProductModel = mongoose.model<Product, ProductModel>(
  'Product', productSchema)
