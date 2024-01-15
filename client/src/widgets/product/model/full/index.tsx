import ProductSlider from "@/features/product/slider";
import { ProductProps } from "@/shared/types/product";

const ProductCardFull: React.FC<ProductProps> = ({ productId, productName, productRate, productPrice, productDiscountPrice, productImages }) => {
  return (
    <div>
      <>
        <ProductSlider productImages={productImages} price={productPrice} discountPrice={productDiscountPrice} /> 
      </>
    </div>
  )
}

export default ProductCardFull;
