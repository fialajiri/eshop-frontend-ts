import { rest } from "msw";
import { mockOrder } from "../mock-data/mock-orders";

process.env.BACKEND_URL = "http://localhost:5000";

export const orderHandlers = [
  rest.post(`${process.env.BACKEND_URL}/api/orders`, (req, res, ctx) => {
    return res(ctx.json(mockOrder));
  }),

  rest.get(`${process.env.BACKEND_URL}/api/orders`, (req, res, ctx) => {
    return res(ctx.json([mockOrder]));
  }),

  rest.get(`${process.env.BACKEND_URL}/api/orders/myorders`, (req, res, ctx) => {
    return res(ctx.json([mockOrder]));
  }),

  rest.get(`${process.env.BACKEND_URL}/api/orders/*`, (req, res, ctx) => {
    return res(ctx.json(mockOrder));
  }),

  rest.put(`${process.env.BACKEND_URL}/api/orders/pay/*`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${process.env.BACKEND_URL}/api/orders/delivered/*`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
