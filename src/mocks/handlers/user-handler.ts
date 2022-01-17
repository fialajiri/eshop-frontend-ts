import {rest} from 'msw'

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