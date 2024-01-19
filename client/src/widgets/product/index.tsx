import ProductHome from "./model/home"

interface ProductProps {
  page: "home" | "product"
}

const Product: React.FC<ProductProps> = ({page}) => {
  return (
    <>
      {page === "home" ? (
          <ProductHome />
      ) : (
        null
      )}
    </>
  )
}

export default Product
