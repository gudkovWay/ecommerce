import { useRef } from "react";
import useHover from "@/shared/hooks/hover";
import items from "./catalog.json";
import styles from "./Catalog.module.scss";

export default function Catalog(props: { style: "menu" | "full" }) {
  const ref = useRef<HTMLDivElement>();
  const isHovering = useHover(ref);
  var catalogStyle = "";

  if (props.style === "menu") {
    catalogStyle = styles.menu;
  } else {
    catalogStyle = styles.full;
  }

  return (
    <ul className={catalogStyle} ref={ref}>
      {items.map((item) => (
        <li className={styles.menu__item} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
