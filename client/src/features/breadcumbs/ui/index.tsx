import UILinks from "@/shared/ui/links";
import styles from "./Breadcumbs.module.scss"
import { ProductHeaderProps } from "@/shared/ui/types/product/ProductPageProps";

const Breadcumbs: React.FC<ProductHeaderProps> = ({ productName, productId }) => {
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
