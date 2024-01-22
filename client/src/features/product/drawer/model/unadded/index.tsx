import { useDispatch } from 'react-redux';

import { addItem } from "@/features/drawer/purchase/purchaseDrawerSlice";
import styles from "../../ProductCard.module.scss";
import { ProductDrawerProps } from '../../productcard';


const UnAddedToDrawer: React.FC<ProductDrawerProps> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addItem({ id }))}
      className={styles.product__card__content__button}
    >
      В корзину
    </button>
  )
}

export default UnAddedToDrawer;
