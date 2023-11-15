import { useForm } from "react-hook-form";
import { useState } from "react";

import ChooseGender from "./gender";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const { register, controller, reset } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);

  const onDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className={styles.signUp}>
      <h2 className={styles.signUpHeader}>Регистрация</h2>
      <h3 className={styles.fieldsHeader}>Обязательные поля</h3>
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
      </form>
    </div>
  );
}
