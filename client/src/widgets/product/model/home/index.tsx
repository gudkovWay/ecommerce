import ProductNew from "@/features/product/card/model/new"
import ProductPurchased from "@/features/product/card/model/purchased"
import ProductSales from "@/features/product/card/model/sales"

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
