import { openModal as openSignIn } from "@/features/auth/sign-in/SignInSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import styles from "./Header.module.scss";
import PrimaryButton from "@/shared/ui/buttons/primary";

const UserMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth.isAuth);

  return (
    <div className={styles.user}>
      <ul className={styles.actions}>
        <li>
          <a className={styles.link}>
            <Image
              src="/header/favorite.svg"
              alt="favorite icon"
              width={24}
              height={24}
            />
            <span>Избранное</span>
          </a>
        </li>
        <li>
          <a className={styles.link}>
            <Image
              src="header/orders.svg"
              alt="order icon"
              width={24}
              height={24}
            />
            <span>Заказы</span>
          </a>
        </li>
        <li>
          <a className={styles.link}>
            <Image
              src="header/cart.svg"
              alt="basket icon"
              width={24}
              height={24}
            />
            <span>Корзина</span>
          </a>
        </li>
      </ul>

      {isAuth === false ? (
        <div className={styles.auth}>
          <PrimaryButton
            decoration="default"
            buttonText="Войти"
            buttonType="button"
            buttonFn={() => dispatch(openSignIn())}
            size="m"
            icon={
              <Image
                src="/header/log-in.svg"
                alt="sign-in icon"
                width={24}
                height={24}
              />
            }
          />
        </div>
      ) : (
        <ul className={styles.authActions}>
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
      )}
    </div>
  );
};

export default UserMenu;
