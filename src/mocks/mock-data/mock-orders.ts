import { OrderItemDoc } from "../../interfaces/models";
import { OrderDoc } from "../../interfaces/models";
import { OrderStatus } from "../../interfaces/order-status-enum";
import { AddressDoc } from "../../interfaces/models";
import { PaymentMethods } from "../../interfaces/payment-methods-enum";

export const mockAddress: AddressDoc = {
  firstName: "jiri",
  lastName: "fiala",
  city: "teplice",
  country: "cz",
  phone: "123456789",
  postal: "55511",
  street: "My Street",
  streetNumber: "1798/25",
};

export const mockOrderItem: OrderItemDoc = {
  productId: "12345",
  image: "image1.jpg",
  name: "Product numero uno",
  price: 12000,
  quantity: 1,
  subtotal: 12000,
};

export const mockOrder: OrderDoc = {
  userId: "12",
  orderItems: [mockOrderItem],

  shippingPrice: 1000,
  taxPrice: 12000,
  totalPrice: 13000,
  shippingAddress: mockAddress,
  paymentMethod: PaymentMethods.CREDIT_CARD,
  orderStatus: OrderStatus.DELIVERED,
  paidAt: "1995-12-17T03:24:00",
  createdAt: "1995-12-17T03:24:00",
  updatedAt: "1995-12-17T03:24:00",
  deliveredAt: "1995-12-17T03:24:00",
};
