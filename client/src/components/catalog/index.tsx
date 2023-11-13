import items from "./catalog.json";
import styles from "./Catalog.module.scss";

export default function Catalog(props: { style: "menu" | "full" }) {
  let catalogStyle = "";

  if (props.style === "menu") {
    catalogStyle = styles.menu;
  } else {
    catalogStyle = styles.full;
  }

  return (
    <ul className={catalogStyle}>
      {items.map((item) => (
        <li key={item.id} className={styles.category}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
