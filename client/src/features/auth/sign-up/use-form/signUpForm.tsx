import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./SignUpForm.module.scss";
import PrimaryButton from "@/shared/ui/buttons/primary";
import SecondaryButton from "@/shared/ui/buttons/secondary";
import ChooseGender from "./gender";
import UserSelect from "./select";

const SignUpForm = () => {
  const { register, controller, reset } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);

  const onDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <form className={styles.signUpForm} onSubmit={() => console.log("submit")}>
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
          <UserSelect value="regions" />
        </label>

        <label>
          Имя
          <input type="text" />
        </label>

        <label>
          Населенный пункт
          <UserSelect value="city" />
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
          buttonType="submit"
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
