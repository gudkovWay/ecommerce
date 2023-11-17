import { useDispatch, useSelector } from "react-redux";
import { closeModal, setCurrentStep } from "./SignUpSlice";
import Image from "next/image";

import SignUpForm from "./signUpForm";
import styles from "./SignUp.module.scss";
import CloseButton from "@/shared/buttons/utils/CloseButton";

export default function SignUp() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.signUp.isOpen);

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
