import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared/lib/redux/store";

import SignUpForm from "./use-form/signUpForm";
import { closeModal } from "./SignUpSlice";
import CloseButton from "@/shared/ui/buttons/utils/CloseButton";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.signUp.isOpen);

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
