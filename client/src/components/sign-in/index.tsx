import Image from "next/image";

import SignInForm from "./signInForm";
import styles from "./Signin.module.scss";

export default function SignIn() {
  return (
    <div className={styles.signIn}>
      <h2 className={styles.signInHeader}> Вход </h2>
      <SignInForm />
      <div className={styles.secondaryButtons}>
        <button className={styles.secondaryButton}>Регистрация</button>
        <button className={styles.forgetPasswordButton}>Забыли пароль?</button>
      </div>
      <button className={styles.closeButton}>
        <Image
          className={styles.closeIcon}
          src="auth/close.svg"
          alt="close"
          width={13}
          height={13}
        />
      </button>
    </div>
  );
}
