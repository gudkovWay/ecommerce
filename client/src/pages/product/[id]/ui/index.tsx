import UIHeader from "@/shared/ui/header";
import renderRating from "@/features/product/rating";
import styles from "./Product.module.scss"
import {Shared} from "@/features/shared";

export interface ProductProps {
  productName: string;
  productId: number;
  productRate: number;
}

const Product: React.FC<ProductProps> = ({ productName, productId, productRate }) => {
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

            Favorite

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
