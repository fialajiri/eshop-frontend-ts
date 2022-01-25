import Image from "next/image";
import { useTypedSelector } from "../../hooks/use-types-selector";

const ProductDetailsGallery: React.FC = () => {
  const { product } = useTypedSelector((store) => store.productDetails);

  return (
    <ul className="product-detail-gallery__list">
      {product!.image.map((img) => (
        <li key={img} className="product-detail-gallery__list__item">
          <Image
            src={`${process.env.IMAGE_DOMAIN}/${img}`}
            layout="fill"
            objectFit="cover"
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductDetailsGallery;
