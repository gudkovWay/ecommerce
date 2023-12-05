import { useSelector, useDispatch } from "react-redux";
import { closeModal, setCurrentStep } from "./SignInSlice";
import { openModal as openSignUpModal } from "../sign-up/SignUpSlice";
import { RootState } from "@/shared/lib/redux/store";

import SignInForm from "./ui/signInForm";
import CloseButton from "@/shared/ui/buttons/utils/CloseButton";
import BackButton from "@/shared/ui/buttons/utils/BackButton";
import SecondaryButton from "@/shared/ui/buttons/secondary";
import styles from "./Signin.module.scss";
import { useEffect } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.signIn.isOpen);
  const currentStep = useSelector(
    (state: RootState) => state.signIn.currentStep,
  );

  const changeCurrentStep = (step: number) => {
    dispatch(setCurrentStep(step));
  };

  const openSignUp = () => {
    dispatch(closeModal());
    dispatch(openSignUpModal());
  };

  useEffect(() => {
    const closeModalOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeModal());
      }
    };
    document.addEventListener("keydown", closeModalOnEscape);
    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [dispatch]);

  if (isOpen) {
    return (
      <div className={styles.signIn}>
        <h2 className={styles.signInHeader}> Вход </h2>
        <SignInForm />
        <div className={styles.secondaryButtons}>
          {currentStep === 1 ? (
            <SecondaryButton
              buttonFn={() => openSignUp()}
              buttonText="Регистрация"
              buttonType="button"
              size="s"
              decoration="outline"
              color="default"
            />
          ) : (
            <BackButton
              buttonFn={() => changeCurrentStep(1)}
              buttonType="button"
              buttonText="Вернуться"
            />
          )}
          <button className={styles.forgetPasswordButton}>
            Забыли пароль?
          </button>
        </div>
        <CloseButton
          buttonFn={() => dispatch(closeModal())}
          buttonType="button"
          buttonText="Закрыть"
        />
      </div>
    );
  }
}
