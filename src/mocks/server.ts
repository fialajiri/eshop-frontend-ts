import {setupServer} from 'msw/node'
import { userHandlers } from './handlers/user-handler'

export const server = setupServer(...userHandlers)
