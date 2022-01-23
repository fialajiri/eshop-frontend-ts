import { mockCategories } from "../mock-data/mock-categories";
import { rest } from "msw";

process.env.BACKEND_URL = "http://localhost:5000";

export const categoryHandlers = [
  rest.get(`${process.env.BACKEND_URL}/api/categories`, (req, res, ctx) => {
    return res(ctx.json(mockCategories));
  }),

  rest.delete(`${process.env.BACKEND_URL}/api/categories/*`, (req, res,ctx) => {
      return res(ctx.status(200))
  }),
  

  rest.post(`${process.env.BACKEND_URL}/api/categories`, (req, res,ctx) => {
      return res(ctx.json(mockCategories[0]))
  })
];
