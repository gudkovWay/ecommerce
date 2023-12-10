import useHover from "@/shared/hooks/hover";
import items from "./catalog.json";
import styles from "./Catalog.module.scss";
import { useRef } from "react";

export default function Catalog(props: { style: "menu" | "full" }) {
  const ref = useRef<HTMLDivElement>();
  const isHovering = useHover(ref);

  let catalogStyle = "";

  if (props.style === "menu") {
    catalogStyle = styles.menu;
  } else {
    catalogStyle = styles.full;
  }

  return (
    <ul className={catalogStyle}>
      {items.map((item) => (
        <li key={item.id} className={styles.menu__item}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
