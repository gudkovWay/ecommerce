import ProductSales from "@/entities/product/model/sales";
import ProductNew from "@/entities/product/model/new/";
import ProductPurchased from "@/entities/product/model/purchased/";

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
