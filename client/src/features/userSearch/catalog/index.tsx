import items from "./catalog.json";
import styles from "./Catalog.module.scss";

export default function Catalog(props: { style: "menu" | "full" }) {
  var catalogStyle = "";

  if (props.style === "menu") {
    catalogStyle = styles.menu;
  } else {
    catalogStyle = styles.full;
  }

  return (
    <ul className={catalogStyle} >
      {items.map((item) => (
        <li className={styles.menu__item} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
