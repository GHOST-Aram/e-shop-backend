import { app } from "./_config/app"
import { productRoutes } from "./apps/products/urls/urls"
import { httpErrors } from "./z-library/HTTP/http-errors"

app.get('/', (req, res, next) =>{
    res.send('Welcome to E-shop')
})
app.use('/products', productRoutes)

app.use(httpErrors.handleUnknownUrls)
app.use(httpErrors.handleServerErrors)