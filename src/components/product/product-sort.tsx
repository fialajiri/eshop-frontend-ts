import Button from "../ui-elements/button"
import { useDispatch } from "react-redux";
import { sortProducts } from "../../state/action-creators/product-action-creators/product-sort-action";
import { SortBY } from "../../interfaces/sort-enum";



const ProductSort:React.FC = () => {

  const dispatch = useDispatch()
  const onSortHandler = (sortBy: SortBY) => {
    dispatch(sortProducts(sortBy))
  }

    return (
        <div className="product-sort__container">
          <div className="product-sort__text__container">
            <h2 className="product-sort__text">Řadit podle</h2>
          </div>
          <ul className="product-sort__list">
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.PRICE_DESCENDING)}
                className="product-filter__button"
                unstyled
              >
                Cena: sestupně
              </Button>
            </li>
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.PRICE_ASCENDING)}
                className="product-filter__button"
                unstyled
              >
                Cena: vzestupně
              </Button>
            </li>
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.A_Z)}
                className="product-filter__button"
                unstyled
              >
                A-Z
              </Button>
            </li>
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.Z_A)}
                className="product-filter__button"
                unstyled
              >
                Z-A
              </Button>
            </li>
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.LATEST)}
                className="product-filter__button"
                unstyled
              >
                Nejnovější
              </Button>
            </li>
            <li>
              <Button
                onClick={onSortHandler.bind(this, SortBY.OLDEST)}
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
