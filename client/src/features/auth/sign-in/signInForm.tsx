import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "./SignInSlice";

import styles from "./Signin.module.scss";
import { authControllerSignIn } from "@/shared/api/generated";

type Inputs = {
  phoneNumber: string;
  password: string;
};

const normalizePhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length > 11) {
    return phoneNumber.slice(0, 11);
  }
  return phoneNumber;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => signInMutation.mutate(data);

  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.signIn.currentStep);

  const changeCurrentStep = (step: number) => {
    dispatch(setCurrentStep(step));
  };

  const signInMutation = useMutation({
    mutationFn: () => authControllerSignIn,
    onSuccess() {
      console.log("success");
    },
  });

  return (
    <>
      {currentStep === 1 ? (
        <form className={styles.signInForm}>
          <label className={styles.formLabel}>Телефон</label>
          <input
            type="tel"
            placeholder="Введите ваш номер телефона"
            {...register("phoneNumber", { required: true })}
            defaultValue="+7"
            onChange={(e) => {
              e.target.value = normalizePhoneNumber(e.target.value);
            }}
          />

          {errors.phoneNumber?.message && <span>Введите номер телефона!</span>}
          <button
            type="button"
            className={styles.signInButton}
            onClick={() => changeCurrentStep(2)}
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
          {errors.password?.message && <span>Введите пароль!</span>}
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
