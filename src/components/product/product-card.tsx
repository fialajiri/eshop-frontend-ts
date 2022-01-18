import Image from "next/image";
import router from "next/router";

import { ProductDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";

interface ProductCardProps {
  product: ProductDoc;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card__container">
      <div
        className="product-card__image"
        onClick={() => router.push("/products/" + product.id)}
      >
        <Image src={product.image[0]} layout="fill" objectFit="cover" alt={product.name} />
      </div>
      <div className="product-card__info">
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__price">
          {new Intl.NumberFormat("cs-CZ").format(product.price)}
          <span> Kč</span>{" "}
        </p>
        <Button>Koupit</Button>
      </div>
    </div>
  );
};

export default ProductCard
