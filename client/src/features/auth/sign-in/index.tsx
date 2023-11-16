import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, setCurrentStep } from "./SignInSlice";

import SignInForm from "./signInForm";
import styles from "./Signin.module.scss";

export default function SignIn() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.signIn.isOpen);
  const currentStep = useSelector((state: any) => state.signIn.currentStep);

  const changeCurrentStep = (step: number) => {
    dispatch(setCurrentStep(step));
  };

  if (isOpen) {
    return (
      <div className={styles.signIn}>
        <h2 className={styles.signInHeader}> Вход </h2>
        <SignInForm />
        <div className={styles.secondaryButtons}>
          {currentStep === 1 ? (
            <button className={styles.secondaryButton}>Регистрация</button>
          ) : (
            <button
              onClick={() => changeCurrentStep(1)}
              className={styles.backButton}
            >
              <Image
                src="auth/arrow-left.svg"
                alt="arrow"
                width={24}
                height={24}
              />
              Вернуться
            </button>
          )}
          <button className={styles.forgetPasswordButton}>
            Забыли пароль?
          </button>
        </div>
        <button
          className={styles.closeButton}
          onClick={() => dispatch(closeModal())}
        >
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
}
