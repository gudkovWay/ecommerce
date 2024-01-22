import { Shared } from "@/features/shared";
import { Favorite } from "@/features/product/favorite";
import { ProductProps } from "@/shared/types/product";
import UIHeader from "@/shared/ui/header";
import renderRating from "@/features/product/rating";
import styles from "./Product.module.scss"
import ProductSlider from "@/features/product/slider";

const Product: React.FC<ProductProps> = ({ productName, productId, productRate, productPrice, productDiscountPrice, productImages }) => {
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

          <ProductSlider productImages={productImages} price={productPrice} discountPrice={productDiscountPrice} />

        </div>
      </div>
    </div>
  )
}

export default Product;
