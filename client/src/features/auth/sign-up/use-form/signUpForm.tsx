import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./SignUpForm.module.scss";
import PrimaryButton from "@/shared/ui/buttons/primary";
import SecondaryButton from "@/shared/ui/buttons/secondary";
import ChooseGender from "./gender";
import UserSelect from "./select";
import { useMutation } from "@tanstack/react-query";
import { authControllerSignUp } from "@/shared/api/generated";

type Inputs = {
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  region: string;
  birthDate: string;
  email?: string;
  role: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isDisabled, setIsDisabled] = useState(false);

  const onDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <form
      className={styles.signUpForm}
      onSubmit={handleSubmit((data) => signUpMutation.mutate(data))}
    >
      <div className={styles.requiredFields}>
        <label>
          Телефон
          <input type="phone" {...register("phone", { required: true })} />
        </label>

        <label>
          Дата Рождения
          <input type="date" {...register("birthDate", { required: true })} />
        </label>

        <label>
          Фамилия
          <input type="text" {...register("lastName", { required: true })} />
        </label>

        <label>
          Регион
          <UserSelect
            value="regions"
            {...register("region", { required: true })}
          />
        </label>

        <label>
          Имя
          <input type="text" {...register("firstName", { required: true })} />
        </label>

        <label>
          Населенный пункт
          <UserSelect value="city" {...register("city", { required: true })} />
        </label>

        <label>
          Пароль
          <input
            type="password"
            {...register("password", { required: true })}
          />
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
          <input type="email" {...register("email")} />
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
        <div className="authPrimaryButton">
          <PrimaryButton
            buttonFn={() => console.log("pressed primary button")}
            buttonType="submit"
            buttonText="Продолжить"
            size="l"
            color="muted"
            decoration="default"
          />
        </div>
        <SecondaryButton
          buttonFn={() => console.log("pressed secondary button")}
          buttonType="button"
          buttonText="Войти"
          size="s"
          color="default"
          decoration="outline"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
