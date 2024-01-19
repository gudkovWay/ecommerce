import {useSelector} from "react-redux";

import { RootState } from "@/shared/lib/redux/store";
import AddedToDrawer from "./model/added";
import UnAddedToDrawer from "./model/unadded";
import { ProductDrawerProps } from "./productcard";

const ProductDrawer: React.FC<ProductDrawerProps> = ({productId}) => {
  const { items } = useSelector((state: RootState) => state.purchaseDrawer);
  const isAdded = items && items.find((item) => item.id === productId);
  
  return (
    <>
      {
        isAdded ? <AddedToDrawer productId={productId}/> : <UnAddedToDrawer productId={productId}/> 
      }
    </>    
  )
}

export default ProductDrawer;
