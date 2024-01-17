import ProductCardDemo from "./model/demo";
import ProductNew from "./model/demo/new";

type ProductsProps = {
  page: "home" | "product"
}

const Products: React.FC<ProductsProps> = ({ page }) => {
  return (
    <>
      {page === "home" ? (
        <ProductNew />
      ) : null}
    </>
  )
}

export default Products
