import ProductSales from "./ui";
import styles from "./ui/Product.module.scss";

const Product = () => {
  return (
    <section className={styles.product}>
      <ProductSales />
    </section>
  );
};

export default Product;
