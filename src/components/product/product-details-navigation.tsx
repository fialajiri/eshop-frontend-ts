import { useTypedSelector } from "../../hooks/use-types-selector";
import Link from "next/link";
import { useActions } from "../../hooks/use-actions";
import { useEffect } from "react";

const ProductDetailsNavigation: React.FC = () => {
  const { product } = useTypedSelector((state) => state.productDetails);

  const navigation = (
    <ul className="product-details-navigation__list">
      <li className="product-details-navigation__list--item">
        <Link href="/">Domů</Link>
        <span>|</span>
      </li>
      <li className="product-details-navigation__list--item">
        <Link href="/produkty">Katalog</Link>
        <span>|</span>
      </li>
      {product?.categories.map((category, index) => (
        <li key={index} className="product-details-navigation__list--item">
          <Link href={`/produkty/kategorie/${category.id}`}>
           {category.name}           
          </Link>
          <span>|</span>
        </li>
      ))}
    </ul>
  );

  

  return <div className="product-details-navigation__container">{navigation}</div>;
};

export default ProductDetailsNavigation;
