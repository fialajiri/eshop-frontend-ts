import ProductList from "../../src/components/product/product-list";
import { mockProducts } from "../../src/mocks/mock-data/mock-products";

const AllProducts: React.FC = () => {
  return <ProductList products={mockProducts} />;
};

export default AllProducts;
