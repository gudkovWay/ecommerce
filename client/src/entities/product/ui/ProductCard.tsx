import ProductCardDemo from "../model/demo";
import ProductCardFull from "../model/full/";
import { ProductProps } from "../product";

const ProductCard: React.FC<ProductProps> = ({ type, productId, productName, productPrice, productDiscountPrice, productRate, productImages }) => {
  return (
    <>
      {type === "demo" ?
        <ProductCardDemo
          productId={productId}
          productName={productName}
          productPrice={productPrice}
          productDiscountPrice={productDiscountPrice}
          productRate={productRate}
          productImages={productImages}
        /> :
        <ProductCardFull
          productId={productId}
          productName={productName}
          productPrice={productPrice}
          productDiscountPrice={productDiscountPrice}
          productRate={productRate}
          productImages={productImages}
        />}
    </>
  )
}

export default ProductCard
