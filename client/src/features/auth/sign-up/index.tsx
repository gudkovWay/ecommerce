import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared/lib/redux/store";

import SignUpForm from "./use-form/signUpForm";
import { closeModal } from "./SignUpSlice";
import CloseButton from "@/shared/ui/buttons/utils/CloseButton";
import styles from "./SignUp.module.scss";
import { useEffect } from "react";

export default function SignUp() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.signUp.isOpen);

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
      <div className={styles.signUp}>
        <h2 className={styles.signUpHeader}>Регистрация</h2>
        <h3 className={styles.fieldsHeader}>Обязательные поля</h3>
        <CloseButton
          buttonFn={() => dispatch(closeModal())}
          buttonText="Закрыть"
          buttonType="button"
        />
        <SignUpForm />
      </div>
    );
  }
}
