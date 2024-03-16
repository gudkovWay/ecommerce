import clsx from "clsx";
import styles from "./Discount.module.scss";

type DiscountPriceProps = {
  price: number;
  discountPrice?: number;
  position: "left" | "right";
}

const DiscountPrice: React.FC<DiscountPriceProps> = ({ discountPrice, price, position }) => {

  if (!discountPrice) {
    return null
  }
  return (
    <div className={clsx(styles.discountPrice, {
      [styles.discountPrice_left]: position === "left",
      [styles.discountPrice_right]: position === "right",
    })}>
      <span>
        -
        {(discountPrice / price) * 100}
        %
      </span>
    </div>
  )
}

export default DiscountPrice