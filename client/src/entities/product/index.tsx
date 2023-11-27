import ProductSales from "./ui/sales";
import ProductNew from "./ui/new";
import ProductPurchased from "./ui/purchased";

import styles from "./ui/Product.module.scss";

const Products = () => {
  return (
    <>
      <ProductSales />
      <ProductNew />
      <ProductPurchased />
    </>
  );
};

export default Products;
