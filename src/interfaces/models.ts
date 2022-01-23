export interface UserDoc {
  id: string;
  email: string;
  isAdmin: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface CategoryDoc {
  id: string;
  name: string;
  products: ProductDoc[] | string[];
}

export interface ProductDoc {
  id: string;
  name: string;
  image: string[];
  categories: CategoryDoc[] | string[];
  description: string;
  price: number;
  countInStock: number;
  availability: number;
  updatedAt?: Date;
  createdAt?: Date;
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
