import Image from "next/image";

import UIButton from "@/shared/ui/buttons/default";
import styles from "./Blog.module.scss";

type BlogCardProps = {
  id: number;
  title: string;
  description: string;
  time: string;
  imageSrc: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  time,
  imageSrc,
}) => {
  return (
    <div className={styles.blog__card}>
      <Image src={imageSrc} alt="Новостная картинка" width={376} height={162} />
      <div className={styles.blog__card__content}>
        <time>{time}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.blog__card__content__button}>
          <UIButton
            buttonFn={() => console.log(`button pressed ${id}`)}
            buttonType="button"
            buttonText="Подробнее"
            color="secondary"
            muted
            decoration="default"
            size="m"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
