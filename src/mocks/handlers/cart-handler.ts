import { mockCart, mockEmptyCart } from '../mock-data/mock-cart';
import {rest} from 'msw'



process.env.BACKEND_URL = "http://localhost:5000";


export const cartHandlers = [
    rest.get(`${process.env.BACKEND_URL}/api/cart`, (req, res, ctx) => {
        return res(
            ctx.json(mockCart)
        )
    }),

    rest.put(`${process.env.BACKEND_URL}/api/cart/addtocart/${mockCart.id}`, (req, res, ctx) => {
        return res(
            ctx.json(mockCart)
        )
    }),

    rest.put(`${process.env.BACKEND_URL}/api/cart/subtractfromcart/${mockCart.id}`, (req, res, ctx) => {
        return res(
            ctx.json(mockCart)
        )
    }),

    rest.put(`${process.env.BACKEND_URL}/api/cart/removefromcart/${mockCart.id}`, (req, res, ctx) => {
        return res(
            ctx.json(mockCart)
        )
    }),

    rest.put(`${process.env.BACKEND_URL}/api/cart/clearcart/${mockCart.id}`, (req, res, ctx) => {
        return res(
            ctx.json(mockEmptyCart)
        )
    }),




]