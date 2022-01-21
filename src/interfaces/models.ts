export interface UserDoc {
  id: string;
  email: string;
  isAdmin: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface CategoryDoc {
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

export interface CartDoc {
  id: string;
  userId?: string;
  items?: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    subTotal: number;
  }[];
  total?: number;
  updatedAt: string;
  createdAt: string;
}
