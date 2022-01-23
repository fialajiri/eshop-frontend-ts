import { CategoryDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";
import { useActions } from "../../hooks/use-actions";

export interface ProductFilterProps {
  categories: string[];
  isVisible: boolean;
  
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  isVisible,
  
}) => {

    const {listProducts} = useActions()

    const filterHandler = (category: string) => {
        listProducts(category)
    }

  return (
    <div className="product-filter__container">
      <div
        className={
          isVisible
            ? "product-filter__text__container"
            : "product-filter__text__container product-filter__text__container--sticky"
        }
      >
        <h2 className="product-filter__text">Filters</h2>
      </div>
      <ul className="product-filter__list">
        {categories.map((category) => (
          <li key={category} className="product-filter__list__item">
            <Button
              className="product-filter__button"
              unstyled
              // @ts-ignore
              onClick={filterHandler}
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
