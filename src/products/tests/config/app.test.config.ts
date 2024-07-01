import express from 'express'
import { routesWrapper } from '../../urls/urls'
import { ProductsController } from '../../controllers/controller'
import { ProductDataAccess } from '../../data-acess/data-access'
import { Product } from '../../data-acess/model'
import { httpErrors } from '../../../z-library/HTTP/http-errors'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

const dataAccess = new ProductDataAccess(Product)
const controller = new ProductsController(dataAccess, 'products')

app.use("/products",routesWrapper(controller))

app.use(httpErrors.handleUnknownUrls)
app.use(httpErrors.handleServerErrors)

export { app }