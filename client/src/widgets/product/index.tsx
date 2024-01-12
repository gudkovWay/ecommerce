import ProductSales from "@/entities/product/model/demo/sales";
import ProductNew from "@/entities/product/model/demo/new";
import ProductPurchased from "@/entities/product/model/demo/purchased";

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
