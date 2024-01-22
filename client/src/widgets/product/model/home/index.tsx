import ProductNew from "./new"
import ProductPurchased from "./purchased"
import ProductSales from "./sales"

const ProductHome = () => {
  return (
    <>
      <ProductSales />
      <ProductNew />
      <ProductPurchased />
    </>
  )
}

export default ProductHome
