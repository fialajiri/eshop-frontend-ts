import { setupServer } from "msw/node";
import { userHandlers } from "./handlers/user-handler";
import { productHandlers } from "./handlers/product-handler";
import {categoryHandlers} from './handlers/category-handlers'
import { cartHandlers } from "./handlers/cart-handler";
import { orderHandlers } from "./handlers/order-handler";


export const server = setupServer(
  ...userHandlers,
  ...productHandlers,
  ...cartHandlers,
  ...categoryHandlers,
  ...orderHandlers
);



beforeAll(() => {
  // Establish requests interception layer before all tests.
  
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});


