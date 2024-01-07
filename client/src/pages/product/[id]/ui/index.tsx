import UIHeader from "@/shared/ui/header";
import styles from "./Product.module.scss"

export interface ProductProps {
  productName: string;
  productId: number;
}

const Product: React.FC<ProductProps> = ({ productName, productId }) => {
  return (
    <div className={styles.product}>
      <div className="container">

        <UIHeader type="product" header={productName} />

        <div className={styles.product__header}>
          <span>арт. {productId}</span>
          <div className={styles.product__header__review}>
            <div className={styles.product__header__stars}>

            </div>
            <span>3 отзыва</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product;
