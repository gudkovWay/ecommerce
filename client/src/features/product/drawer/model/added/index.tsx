import { decrement, increment } from "@/features/drawer/purchase/purchaseDrawerSlice";
import { RootState } from "@/shared/lib/redux/store";
import styles from "../../ProductCard.module.scss"
import { ProductDrawerProps } from "../../productcard";
import { useDispatch, useSelector } from "react-redux";
import Icons from "@/shared/ui/icons";

const AddedToDrawer: React.FC<ProductDrawerProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.purchaseDrawer);
  return (

    <div className={styles.product__card__content__button__added}>
      <button
        onClick={() => dispatch(decrement({ id }))}
        className={styles.product__card__content__button__added__button}
      >
        <Icons iconName="minus" />
      </button>
      <p>{items.find((item) => item.id === id)?.counter}</p>
      <button
        onClick={() => dispatch(increment({ id }))}
        className={styles.product__card__content__button__added__button}
      >
        <Icons iconName="plus" />
      </button>
    </div>
  )
}

export default AddedToDrawer;
