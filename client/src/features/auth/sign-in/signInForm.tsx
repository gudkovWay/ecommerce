import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./Signin.module.scss";
import { useMutation } from "@tanstack/react-query";
import { authControllerSignIn } from "@/shared/api/generated";

type Inputs = {
  phone: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => signInMutation.mutate(data);

  const signInMutation = useMutation({
    mutationFn: () => authControllerSignIn,
    onSuccess() {
      console.log("success");
    },
  });

  const [currentStep, useCurrentStep] = useState(1);

  const handlePrevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    useCurrentStep(1);
  };

  const handleNextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    useCurrentStep(2);
  };
  return (
    <>
      {currentStep === 1 ? (
        <form className={styles.signInForm}>
          <label className={styles.formLabel}>Телефон</label>
          <input
            type="text"
            placeholder="Введите ваш номер телефона"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span>Введите номер телефона!</span>}
          <button
            type="button"
            className={styles.signInButton}
            onClick={handleNextStep}
          >
            Вход
          </button>
        </form>
      ) : (
        <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.formLabel}>Пароль</label>
          <input
            type="text"
            placeholder="Введите ваш пароль"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Введите пароль!</span>}
          <button
            className={styles.signInButton}
            type="submit"
            disabled={signInMutation.isLoading}
          >
            Подтвердить
          </button>
        </form>
      )}
    </>
  );
}
