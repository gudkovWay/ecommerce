import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../SignInSlice";

import { authControllerSignIn } from "@/shared/api/generated";
import { normalizePhoneNumber } from "@/shared/lib/normalizePhoneNumber";
import styles from "../Signin.module.scss";
import PrimaryButton from "@/shared/ui/buttons/primary";

type Inputs = {
  phoneNumber: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.signIn.currentStep);

  const changeCurrentStep = (step: number) => {
    event.preventDefault();
    dispatch(setCurrentStep(step));
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    authControllerSignIn(data);
    dispatch(setAuth(true));
  };

  return (
    <>
      <form
        className={styles.signInForm}
        onSubmit={() => console.log("submit form")}
      >
        {currentStep === 1 ? (
          <section className={styles.signInForm}>
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

            {errors.phoneNumber?.message && (
              <span>Введите номер телефона!</span>
            )}
            <div className="authPrimaryButton">
              <PrimaryButton
                buttonFn={(event) => changeCurrentStep(2, event)}
                buttonText="Вход"
                buttonType="button"
                size="l"
                color="muted"
                decoration="default"
              />
            </div>
          </section>
        ) : (
          <section className={styles.signInForm}>
            <label className={styles.formLabel}>Пароль</label>
            <input
              type="password"
              placeholder="Введите ваш пароль"
              {...register("password", { required: true })}
            />
            {errors.password?.message && <span>Введите пароль!</span>}
            <div className="authPrimaryButton">
              <PrimaryButton
                buttonFn={() => console.log("press submit")}
                buttonText="Подтвердить"
                buttonType="submit"
                size="l"
                color="muted"
                decoration="default"
              />
            </div>
          </section>
        )}
      </form>
    </>
  );
}
