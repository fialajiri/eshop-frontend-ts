import { CategoryDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-types-selector";

export interface ProductFilterProps {
  isVisible: boolean;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ isVisible }) => {
  const { listProducts } = useActions();
  const { categories } = useTypedSelector(
    (state) => state.categoryList
  );

  const filterHandler = (category: string) => {    
    listProducts('',category);
  };

  return (
    <div className="product-filter__container">
      <div
        className={
          isVisible
            ? "product-filter__text__container"
            : "product-filter__text__container product-filter__text__container--sticky"
        }
      >
        <h2 className="product-filter__text">Filtrovat</h2>
      </div>
      <ul className="product-filter__list">
        {categories.map((category) => (
          <li key={category.id} className="product-filter__list__item">
            <Button
              className="product-filter__button"
              unstyled             
              onClick={filterHandler.bind(this, category.id)}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
