import Image from "next/image";
import clsx from "clsx";

import styles from "./index.module.scss";

type UIHeaderProps = {
  header: string;
  link?: string;
  linkName?: string;
  type: "product" | "category"
};

const UIHeader: React.FC<UIHeaderProps> = ({
  header,
  link,
  linkName,
  type,
}) => {
  return (
    <div className={clsx(styles.section__header, {
      [styles.section__header__margin]: type === "category",
    })}>
      <h2 className={clsx(styles.section__header__title, {
        [styles.section__header__title__product]: type === "product",
        [styles.section__header__title__category]: type === "category",
      })}>{header}</h2>
      {link ? (
        <a href={link}>
          {linkName}
          <Image src="/icons/arrow-right.svg" alt="arrow" width={7} height={13} />
        </a>

      ) : null}
    </div>
  );
};

export default UIHeader;
