import UILinks from "@/shared/ui/links";
import styles from "./Breadcumbs.module.scss"

export type BreadcumbsProps = {
  productName: string;
  produjctId: string;
}

const Breadcumbs: React.FC<BreadcumbsProps> = ({ productName, productId }) => {
  return (



      <div className={styles.breadcumbs}>
        <div className="container">
        <ul>
          <li><UILinks href="/" text="Главная" /></li>
          <li><UILinks href="/catalog" text="Каталог" /></li>
          <li><UILinks href="/categories" text="Категории" /></li>
          <li><UILinks href={productId} text={productName} current /></li>
        </ul>
      </div>
    </div>



  )
}

export default Breadcumbs
