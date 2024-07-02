import { app } from "./_config/app"
import { productRoutes } from "./apps/products/urls/urls"
import { httpErrors } from "./z-library/HTTP/http-errors"

app.use('/peoducts', productRoutes)

app.use(httpErrors.handleUnknownUrls)
app.use(httpErrors.handleServerErrors)