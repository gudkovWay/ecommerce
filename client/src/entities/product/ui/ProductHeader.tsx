import Image from "next/image";
import styles from "./Product.module.scss";

type ProductHeaderProps = {
  header: string;
  link: string;
  linkName: string;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({
  header,
  link,
  linkName,
}) => {
  return (
    <div className={styles.products__section__header}>
      <h2 className="sectionTitle">{header}</h2>
      <a href={link}>
        {linkName}
        <Image src="/icons/arrow-right.svg" alt="arrow" width={7} height={13} />
      </a>
    </div>
  );
};

export default ProductHeader;
