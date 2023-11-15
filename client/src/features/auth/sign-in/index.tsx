import Image from "next/image";
import { useSelector, useDispatch } from "react-redux"; 
import { closeModal } from "@/redux/slices/modalSlice";

import SignInForm from "./signInForm";
import styles from "./Signin.module.scss";

export default function SignIn() {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal.isOpen);

  if (modal) { 

  return (

    <div className={styles.signIn}>
      <h2 className={styles.signInHeader}> Вход </h2>
      <SignInForm />
      <div className={styles.secondaryButtons}>
        <button className={styles.secondaryButton}>Регистрация</button>
        <button className={styles.forgetPasswordButton}>Забыли пароль?</button>
      </div>
      <button className={styles.closeButton} onClick={() => dispatch(closeModal())}>
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
}}
