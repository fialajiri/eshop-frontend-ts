import {rest} from 'msw'
import { mockedUser, mockUsers, mockUserDetails } from '../mock-data/mock-user';



process.env.BACKEND_URL = "http://localhost:5000";


export const userHandlers = [
    rest.post(`${process.env.BACKEND_URL}/api/users/signin`, (req, res, ctx) => {
        return res(
            ctx.json(mockedUser)
        )
    }),
    rest.get(`${process.env.BACKEND_URL}/api/users/currentuser`, (req, res, ctx) => {
        return res(
            ctx.json(mockedUser)
        )
    }),
    rest.get(`${process.env.BACKEND_URL}/api/users/getallusers`, (req, res, ctx) => {
        return res(
            ctx.json(mockUsers)
        )
    }),
    rest.get(`${process.env.BACKEND_URL}/api/users/*`, (req, res, ctx) => {
        return res(
            ctx.json(mockUserDetails)
        )
    }),
    rest.delete(`${process.env.BACKEND_URL}/api/users/*`, (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    }),
    rest.put(`${process.env.BACKEND_URL}/api/users/updateprofile/*`, (req, res, ctx) => {
        return res(
            ctx.json(mockUserDetails)
        )
    }),
    rest.put(`${process.env.BACKEND_URL}/api/users/*`, (req, res, ctx) => {
        return res(
            ctx.json(mockUserDetails)
        )
    }),
    rest.post(`${process.env.BACKEND_URL}/api/users/signup`, (req, res, ctx) => {
        return res(
            ctx.json(mockedUser)
        )
    }),
    rest.post(`${process.env.BACKEND_URL}/api/users/signout`, (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    }),

]