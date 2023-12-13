import Image from "next/image";
import Link from "next/link";

import Catalog from "@/features/userSearch/catalog";
import Search from "@/features/userSearch/search";

import styles from "./Header.module.scss";
import UserMenu from "./userMenu";
import { useRef } from "react";
import useHover from "@/shared/hooks/hover";

export const Header = () => {
  const ref = useRef<HTMLDivElement>();
  const isHovering = useHover(ref);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              className={styles.logoDesktop}
              src="/logo/headerDesktop.svg"
              alt="Logo"
              width={152}
              height={32}
            />
          </Link>
        </div>
        <div className={styles.productActions}>
          <div className={styles.catalog} ref={ref}>
            <button className={styles.catalogBtn}>
              <Image
                src="/header/menu.svg"
                alt="Catalog Icon"
                width={24}
                height={24}
              />

              <a>Каталог</a>
            </button>
          </div>

          <div className={styles.search}>
            <Search />
          </div>
        </div>
        <UserMenu />
      </div>
      {isHovering && (
        <div ref={ref}>
          <Catalog style="menu" />{" "}
        </div>
      )}
    </header>
  );
};
