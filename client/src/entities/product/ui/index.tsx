import Link from "next/link";
import styles from "./Product.module.scss";

const ProductSales = () => {
  return (
    <section className={styles.product__section}>
      <div className={styles.product__header}>
        <h2>Акции</h2>
        <a href="#!">Все акции</a>
      </div>
      <div className={styles.product__list}></div>
    </section>
  );
};

export default ProductSales;
