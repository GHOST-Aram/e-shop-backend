import request from "supertest"
import { app } from "./config/app.test.config"
import { describe, test } from "@jest/globals"
import { assert } from "../../../z-library/testing/response-assertion"
import { productData, badProductData } from "./mocks/test-data"


describe('Rentals POST Route', () => {
    test('Responds with Method not allowed, status 405: User defined Ids not allowed', 
        async() =>{
            const response = await request(app).post('/products/64c9e4f2df7cc072af2ac9e')
                .send(productData)

            assert.respondsWithMethodNotAllowed(response)
        }
    )

    test('Responds with validation errors, status 400: Invalid input', 
        async() =>{
            const response = await request(app).post('/products')
                .send(badProductData)

            assert.respondsWithBadRequest(response)
            assert.respondsWithValidationErrors(response)
        }
    )

    test('Responds with created resource, status 201: Post success', 
        async() =>{
            const response = await request(app).post('/products')
            .send(productData)
    
            assert.respondsWithCreatedResource(response)
        }
    )
})