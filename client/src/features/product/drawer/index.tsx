import {useSelector} from "react-redux";

import { RootState } from "@/shared/lib/redux/store";
import AddedToDrawer from "./model/added";
import UnAddedToDrawer from "./model/unadded";
import { ProductDrawerProps } from "./productcard";

const ProductDrawer: React.FC<ProductDrawerProps> = ({id}) => {
  const { items } = useSelector((state: RootState) => state.purchaseDrawer);
  const isAdded = items && items.find((item) => item.id === id);
  
  return (
    <>
      {
        isAdded ? <AddedToDrawer id={id}/> : <UnAddedToDrawer id={id}/> 
      }
    </>    
  )
}

export default ProductDrawer;
