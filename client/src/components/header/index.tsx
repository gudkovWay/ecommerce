import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import Catalog from "@/widgets/catalog";
import Search from "@/features/search";
import { openModal as openSignIn } from "@/features/auth/sign-in/SignInSlice";
import { openModal as openSignUp } from "@/features/auth/sign-up/SignUpSlice";

import styles from "./Header.module.scss";
import SecondaryButton from "@/shared/buttons/secondary";

export default function Header() {
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

      <div className={styles.actions}>
        <ul>
          <div className={styles.action}>
            <Image
              src="/header/favorite.svg"
              alt="favorite icon"
              width={24}
              height={24}
            />
            <li>
              <a className={styles.link} data-replace="Избранное">
                <span>Избранное</span>
              </a>
            </li>
          </div>
          <div className={styles.action}>
            <Image
              src="header/orders.svg"
              alt="order icon"
              width={24}
              height={24}
            />
            <li>
              <a className={styles.link} data-replace="Заказы">
                <span>Заказы</span>
              </a>
            </li>
          </div>
          <div className={styles.action}>
            <Image
              src="header/cart.svg"
              alt="basket icon"
              width={24}
              height={24}
            />
            <li>
              <a className={styles.link} data-replace="Корзина">
                <span>Корзина</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.auth}>
        <button
          className={styles.signInBtn}
          onClick={() => dispatch(openSignIn())}
        >
          Вход
        </button>
        <SecondaryButton
          buttonText="Регистрация"
          buttonType="button"
          buttonFn={() => dispatch(openSignUp())}
        />
      </div>

      {/*
      <div className={styles.user}>
        <ul>
          <div className={styles.userBar}>
            <Image
              className={styles.avatar}
              src="/header/user.png"
              alt="user icon"
              width={24}
              height={16}
            />
            <a>Elliot</a>
          </div>
          <div className={styles.userMenu}>
            <li>
              <a>
                <Image
                  className={styles.userIcon}
                  src="header/arrowDown.svg"
                  alt="buttond Down icon"
                  width={13}
                  height={7}
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
*/}
    </header>
  );
}
