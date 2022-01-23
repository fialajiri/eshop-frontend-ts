import { rest } from "msw";
import { mockProducts as products } from "../mock-data/mock-products";

process.env.BACKEND_URL = "http://localhost:5000";

export const productHandlers = [
  rest.get(`${process.env.BACKEND_URL}/api/products`, (req, res, ctx) => {
    return res(ctx.json({ products }));
  }),

  rest.get(`${process.env.BACKEND_URL}/api/products/*`, (req, res, ctx) => {
    return res(ctx.json(products[0]));
  }),

  rest.delete(`${process.env.BACKEND_URL}/api/products/*`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(`${process.env.BACKEND_URL}/api/products`, (req, res, ctx) => {
    return res(ctx.json(products[0]));
  }),

  rest.put(`${process.env.BACKEND_URL}/api/products/*`, (req, res, ctx) => {
    return res(ctx.json(products[0]));
  }),
];
