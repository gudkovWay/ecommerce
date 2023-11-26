import ProductSales from "./ui/sales";
import ProductNew from "./ui/new";
import ProductPurchased from "./ui/purchased";

import styles from "./ui/Product.module.scss";

const Products = () => {
  return (
    <>
      <section className={styles.products}>
        <ProductSales />
      </section>
      <section className={styles.products}>
        <ProductNew />
      </section>
      <section className={styles.products}>
        <ProductPurchased />
      </section>
    </>
  );
};

export default Products;
