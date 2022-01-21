import { CartDoc } from "../../interfaces/models";

export const mockCart: CartDoc = {
    id: '123',
    userId: '123456',
    items: [
        {
            productId: 'a1',
            name: 'product 1',
            quantity: 10,
            price: 199,
            subTotal: 1990
        }, 
        {
            productId: 'b1',
            name: "product 2",
            quantity: 1,
            price: 10,
            subTotal: 10
        }
    ],
    total: 2000,
    updatedAt: '2014-04-03T00:00:00.000Z',
    createdAt: '2014-04-03T00:00:00.000Z',
}

export const mockEmptyCart:CartDoc = {
    id: '1234',
    updatedAt: '2014-04-03T00:00:00.000Z',
    createdAt: '2014-04-03T00:00:00.000Z',
}

