import {rest} from 'msw'
import { mockedUser } from '../mock-data/mock-user';


process.env.BACKEND_URL = "http://localhost:5000";


export const userHandlers = [
    rest.post(`${process.env.BACKEND_URL}/api/users/signin`, (req, res, ctx) => {
        return res(
            ctx.json(mockedUser)
        )
    })
]