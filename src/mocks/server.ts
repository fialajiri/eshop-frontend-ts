import {setupServer} from 'msw/node'
import { userHandlers } from './handlers/user-handler'
import { productHandlers } from './handlers/product-handler'
import { cartHandlers } from './handlers/cart-handler'

export const server = setupServer(...userHandlers, ...productHandlers, ...cartHandlers)
