import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Catalog from "@/features/userSearch/catalog";
import Search from "@/features/userSearch/search";
import { openModal as openSignIn } from "@/features/auth/sign-in/SignInSlice";

import styles from "./Header.module.scss";
import PrimaryButton from "@/shared/ui/buttons/primary";
import UserMenu from "./userMenu";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
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
        <div className={styles.catalog}>
          <button className={styles.catalogBtn}>
            <Image
              src="/header/menu.svg"
              alt="Catalog Icon"
              width={24}
              height={24}
            />

            <a>
              Каталог
              <Catalog style={"menu"} />
            </a>
          </button>
        </div>

        <div className={styles.search}>
          <Search />
        </div>
      </div>
      <UserMenu />
    </header>
  );
};
