import Button from "../ui-elements/button"

export interface ProductSortProps {
    onSort: (action: string) => void
}

const ProductSort:React.FC<ProductSortProps> = (props) => {

    return (
        <div className="product-sort__container">
          <div className="product-sort__text__container">
            <h2 className="product-sort__text">SORT BY</h2>
          </div>
          <ul className="product-sort__list">
            <li>
              <Button
                onClick={props.onSort.bind(this, "price-ascending")}
                className="product-filter__button"
                unstyled
              >
                Cena: sestupně
              </Button>
            </li>
            <li>
              <Button
                onClick={props.onSort.bind(this, "price-descending")}
                className="product-filter__button"
                unstyled
              >
                Cena: vzestupně
              </Button>
            </li>
            <li>
              <Button
                onClick={props.onSort.bind(this, "a-z")}
                className="product-filter__button"
                unstyled
              >
                A-Z
              </Button>
            </li>
            <li>
              <Button
                onClick={props.onSort.bind(this, "z-a")}
                className="product-filter__button"
                unstyled
              >
                Z-A
              </Button>
            </li>
            <li>
              <Button
                onClick={props.onSort.bind(this, "latest")}
                className="product-filter__button"
                unstyled
              >
                Nejnovější
              </Button>
            </li>
            <li>
              <Button
                onClick={props.onSort.bind(this, "oldest")}
                className="product-filter__button"
                unstyled
              >
                Nejstarší
              </Button>
            </li>
            {/* <li>
              <Button className="product-filter__button" unstyled>
                Top
              </Button>
            </li> */}
          </ul>
        </div>
      );
    };
    
    export default ProductSort;
