import { useEffect, useState } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-types-selector";
import Button from "../ui-elements/button";
import Input from "../form-elements/input";
import LoadingSpinner from "../ui-elements/loading-spinner";
import { useForm } from "../../hooks/use-form-hook";
import { CreateProductData } from "../../state/action-creators/product-action-creators";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_MIN,
  VALIDATOR_NUMBER,
} from "../../validators/validators";

const InsertProduct: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<Map<string, boolean>>(
    new Map()
  );
  const { loading, error, categories } = useTypedSelector((state) => state.categoryList);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);

  const { listCategories, createProduct } = useActions();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      quantity: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    listCategories();
  }, []);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let selectedCategoriesId: string[] = [];
    for (const [key, value] of selectedCategories.entries()) {
      if (value) selectedCategoriesId.push(key);
    }

    console.log(selectedFiles);

    const newProduct: CreateProductData = {
      name: formState.inputs.name.value,
      description: formState.inputs.description.value,
      price: parseInt(formState.inputs.price.value),
      countInStock: parseInt(formState.inputs.quantity.value),
      images: selectedFiles,
      categories: selectedCategoriesId,
    };

    createProduct(newProduct);
  };

  const setCategoryCheckedHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryId: string
  ) => {
    const isChecked = event.target.checked;
    setSelectedCategories((map) => new Map(map.set(categoryId, isChecked)));
  };

  if (loading) {
    return <LoadingSpinner asOverlay />;
  }

  const categoryCheckboxes = categories.map((category) => (
    <div className="product-insert__categories" key={category.id}>
      <label htmlFor={category.id}>{category.name}</label>
      <input
        type="checkbox"
        id={category.id}
        checked={selectedCategories.get(category.id) || false}
        onChange={(e) => {
          setCategoryCheckedHandler(e, category.id);
        }}
      />
    </div>
  ));

  return (
    <div className="form__container">
      <h2 className="heading-secondary form__heading">Vlo??it product</h2>
      <form className="form__inputs" onSubmit={submitFormHandler}>
        <Input
          className="product-insert__name"
          id="name"
          element="input"
          label="N??zev"
          type="text"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(75)]}
          errorText="N??zev mus?? m??t maxim??ln?? 75 znak??."
          onInput={inputHandler}
        />
        <Input
          className="product-insert__price"
          id="price"
          element="input"
          label="Cena"
          type="number"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMBER(), VALIDATOR_MIN(0)]}
          errorText="Zadejte pros??m kladn?? ????slo."
          onInput={inputHandler}
        />
        <Input
          className="product-insert__quantity"
          id="quantity"
          element="input"
          label="Mno??stv??"
          type="number"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMBER(), VALIDATOR_MIN(0)]}
          errorText="Zadejte pros??m kladn?? ????slo."
          onInput={inputHandler}
        />
        <Input
          className="product-insert__description"
          id="description"
          element="textarea"
          label="Popis"
          rows={5}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(500)]}
          errorText="N??zev mus?? m??t maxim??ln?? 500 znak??."
          onInput={inputHandler}
        />

        <MultipleImageUpload
          maxFiles={4}
          setImages={setSelectedFiles}
          errorText="Vyberte maxim??ln?? 4 obr??zky"
          inputId="images"
          isValid={imagesValid}          
          setIsValid={setImagesValid}
          className="product-insert__image-upload"
        />

        {categoryCheckboxes}

        <Button
          className="product-insert__submit-button"
          //   disabled={!formState.isValid}
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default InsertProduct;
