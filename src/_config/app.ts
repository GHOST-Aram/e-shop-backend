import express, { Application } from "express"
import { Server } from "../z-library/server/server"
import { Connection } from "../z-library/db/connection"
import 'dotenv/config'

const app: Application = express()
const server = new Server(app)

const mongoDbUri = process.env.MONGODB_URI
if(mongoDbUri){
    try {
        new Connection(mongoDbUri)
    } catch (error) {
        console.log(error)
    }
} else {
    console.log('Database connection string is null.')
}


server.useJSONPayloads()
server.allowCrossOriginResourceSharing()
server.enforceSecurity()
server.logRequestsandResponses()

const PORT = Number(process.env.PORT) || 8000
server.listenToRequests(PORT,'')

export { app }