import { PaymentMethods } from "./payment-methods-enum";
import { OrderStatus } from "./order-status-enum";

export interface UserDoc {
  id: string;
  email: string;
  isAdmin: boolean;
  updatedAt?: Date | string;
  createdAt?: Date | string;
}

export interface UserDetailsDoc {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  addresses: AddressDoc[];
}

export interface AddressDoc  {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  streetNumber: string;
  city: string;
  postal: string;
  country: string;
}

export interface CategoryDoc {
  id: string;
  name: string;
  products: ProductDoc[] | string[];
}

export interface CategoryInProductDoc {
  id: string;
  name: string;
}

export interface ProductDoc {
  id: string;
  name: string;
  image: string[];
  categories: CategoryInProductDoc[];
  description: string;
  price: number;
  countInStock: number;
  availability: number;
  updatedAt: Date | string;
  createdAt: Date | string;
}

export interface CartItemDoc {
  product: string;
  name: string;
  quantity: number;
  price: number;
  subTotal: number;
  image: string;
}

export interface CartDoc {
  id: string;
  userId?: string;
  items: CartItemDoc[];
  total: number;
  updatedAt: string;
  createdAt: string;
}

export interface OrderItemDoc {
  name: string;
  quantity: number;
  image: string;
  price: number;
  subtotal: number;
  productId: string;
}

export interface OrderDoc {
  userId: string;
  orderItems: OrderItemDoc[];
  shippingAddress: AddressDoc;
  paymentMethod: PaymentMethods;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: OrderStatus;
  paidAt: Date | string;
  deliveredAt: Date | string;
  updatedAt: Date | string;
  createdAt: Date | string;
}
