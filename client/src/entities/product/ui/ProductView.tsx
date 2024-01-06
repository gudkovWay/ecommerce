export interface ProductViewProps {
  productName: string;
}

const ProductView: React.FC<ProductViewProps> = ({ productName }) => {
  return (
    <h1 className="productName">{productName}</h1>
  )
}

export default ProductView
