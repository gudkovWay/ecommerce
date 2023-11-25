import ProductSales from "./ui/sales";
import styles from "./ui/Product.module.scss";

const Products = () => {
  return (
    <section className={styles.products}>
      <ProductSales />
    </section>
  );
};

export default Products;
