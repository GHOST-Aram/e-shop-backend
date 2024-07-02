import express, { Application } from "express"
import { Server } from "../z-library/server/server"
import 'dotenv/config'

const app: Application = express()
const server = new Server(app)

server.useJSONPayloads()
server.allowCrossOriginResourceSharing()
server.enforceSecurity()
server.logRequestsandResponses()

const PORT = Number(process.env.PORT) || 8000
server.listenToRequests(PORT,'')

export { app }