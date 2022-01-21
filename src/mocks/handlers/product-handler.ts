import {rest} from 'msw'
import { mockProducts } from '../mock-data/mock-products';


process.env.BACKEND_URL = "http://localhost:5000";


export const productHandlers = [
    rest.get(`${process.env.BACKEND_URL}/api/products`, (req, res, ctx) => {
        return res(
            ctx.json(mockProducts)
        )
    })
]