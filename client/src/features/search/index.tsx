import Image from "next/image";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Найти товар" />
      <Image
        className={styles.searchIcon}
        src="/header/search.svg"
        alt="search icon"
        width={24}
        height={24}
      />
    </form>
  );
}
