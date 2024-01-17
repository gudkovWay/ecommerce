import AddedToDrawer from "./model/added";
import UnAddedToDrawer from "./model/unadded";
import { ProductDrawerProps } from "./productcard";

const ProductDrawer: React.FC<ProductDrawerProps> = ({productId, itemAdded}) => {
  return (
    <>
      {
       itemAdded? <AddedToDrawer productId={productId} /> : <UnAddedToDrawer productId={productId}  /> 
      }
    </>    
  )
}
export default ProductDrawer;
