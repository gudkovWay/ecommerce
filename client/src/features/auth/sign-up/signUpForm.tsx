import { useState } from "react";
import { useForm } from "react-hook-form";

import ChooseGender from "./gender";
import styles from "./SignUp.module.scss";
import PrimaryButton from "@/shared/buttons/primary";
import SecondaryButton from "@/shared/buttons/secondary";

const SignUpForm = () => {
  const { register, controller, reset } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);

  const onDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <form className={styles.signUpForm}>
      <div className={styles.requiredFields}>
        <label>
          Телефон
          <input type="phone" />
        </label>

        <label>
          Дата Рождения
          <input type="date" />
        </label>

        <label>
          Фамилия
          <input type="text" />
        </label>

        <label>
          Регион
          <input type="text" />
        </label>

        <label>
          Имя
          <input type="text" />
        </label>

        <label>
          Населенный пункт
          <input type="text" />
        </label>

        <label>
          Пароль
          <input type="password" />
        </label>

        <label>
          Пол
          <ChooseGender />
        </label>

        <label>
          Повторите пароль
          <input type="password" />
        </label>
      </div>

      <h3 className={styles.fieldsHeader}>Необязательные поля</h3>
      <div className={styles.optionalFields}>
        <label>
          Номер карты
          <input
            type="text"
            disabled={isDisabled}
            className={`${isDisabled ? styles.disabled : null}`}
          />
        </label>
        <label>
          E-mail
          <input type="email" />
        </label>
        <label className={styles.loyalCart}>
          У меня нет карты лояльности
          <input
            name="hasCard"
            type="checkbox"
            className={styles.loyalCartInput}
            onClick={onDisabled}
          />
        </label>
      </div>
      <div className={styles.formButtons}>
        <PrimaryButton
          buttonFn={() => console.log("pressed primary button")}
          buttonType="button"
          buttonText="Продолжить"
        />

        <SecondaryButton
          buttonFn={() => console.log("pressed secondary button")}
          buttonType="button"
          buttonText="Войти"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
