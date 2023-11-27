import Image from "next/image";

import SecondaryButton from "@/shared/ui/buttons/secondary";
import styles from "./Blog.module.scss";

const BlogCard = () => {
  return (
    <div className={styles.blog__card}>
      <Image
        src="/blog/001.png"
        alt="Новостная картинка"
        width={376}
        height={162}
      />
      <div className={styles.blog__card__content}>
        <time>05.03.2021</time>
        <h3>Режим использования масок и перчаток на территории магазинов</h3>
        <p>
          Подробная информация о режимах использования масок и перчаток на
          территории магазинов "ЛЕНТА". Информация обновляется каждый будний
          день.
        </p>
        <SecondaryButton
          buttonFn={() => console.log("button pressed")}
          buttonType="button"
          buttonText="Подробнее"
          decoration="default"
          size="m"
        />
      </div>
    </div>
  );
};

export default BlogCard;
