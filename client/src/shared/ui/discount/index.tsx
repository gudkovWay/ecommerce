import clsx from "clsx";
import styles from "./Discount.module.scss";

type DiscountPriceProps = {
  price: string;
  discountPrice?: string;
  position: "left" | "right";
}

const DiscountPrice: React.FC<DiscountPriceProps> = ({ discountPrice, price, position }) => {
  return (
    <div className={clsx(styles.discountPrice, {
      [styles.discountPrice_left]: position === "left",
      [styles.discountPrice_right]: position === "right",
    })}>
      <span>
        -
        {(parseFloat(discountPrice!) / parseFloat(price)) * 100}
        %
      </span>
    </div>
  )
}

export default DiscountPrice
