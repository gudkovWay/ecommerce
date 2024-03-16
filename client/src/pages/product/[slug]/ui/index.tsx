import { Shared } from "@/features/shared";
import { Favorite } from "@/features/product/favorite";
import { ProductUIProps } from "@/shared/types/product";
import UIHeader from "@/shared/ui/header";
import renderRating from "@/features/product/rating";
import styles from "./Product.module.scss"
import ProductSlider from "@/features/product/slider";
import ProductCharacteristics from "@/shared/ui/product/characteristics";

const Product: React.FC<ProductUIProps> = ({ productName, productId, productRate, productPrice, productDiscountPrice, productImages, productBrand, productCountry, productWeight }) => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <UIHeader type="product" header={productName} />

          <div className={styles.product__headers}>
            <span>арт. {productId}</span>

            <div className={styles.product__headers__review}>
              <div className={styles.product__headers__review__stars}>
                {renderRating({ rating: productRate })}
              </div>
              <span><u>3 отзыва</u></span>
            </div>

            <Shared />

            <Favorite type="text" id={productId} />
          </div>

          <div className={styles.wrapper__product}>
            <ProductSlider productImages={productImages} price={productPrice} discountPrice={productDiscountPrice} />
            <ProductCharacteristics price={productPrice} discountPrice={productDiscountPrice} brand={productBrand} country={productCountry} weight={productWeight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
