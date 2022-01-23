import { useState } from "react";
import { useActions } from "../../hooks/use-actions";

import Button from "../ui-elements/button";
import { MagnifyingGlass } from "phosphor-react";

const ProductSearchBar: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const { listProducts } = useActions();

  const searchFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    listProducts(searchKey);
    setSearchKey("");
  };

  return (
    <div className="product-search__container">
      <form className="product-search__form" onSubmit={searchFormHandler}>
        <input
          className="product-search__input"
          type="text"
          placeholder="Hledej"
          onChange={(event) => setSearchKey(event.target.value.toLowerCase())}
          value={searchKey}
        />
        <Button className="product-search__button" type="submit" unstyled>
          <MagnifyingGlass className="product-search__icon" />
        </Button>
      </form>
    </div>
  );
};

export default ProductSearchBar;
