import {rest} from 'msw'

process.env.BACKEND_URL = "http://localhost:5000";


export const userHandlers = [
    rest.post(`${process.env.BACKEND_URL}/api/users/signin`, (req, res, ctx) => {
        return res(
            ctx.json({
                name: 'Jiri Fiala',
                email: 'jirik.fiala@post.cz',
                isAdmin: true
            })
        )
    })
]