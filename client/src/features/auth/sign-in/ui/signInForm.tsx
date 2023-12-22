import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { closeModal, setCurrentStep } from "../SignInSlice";
import { setAuth } from "../../authSlice";
import { authControllerSignIn } from "@/shared/api/generated";
import { normalizePhoneNumber } from "@/shared/lib/normalizePhoneNumber";
import UIButton from "@/shared/ui/buttons/default/";
import styles from "../Signin.module.scss";

type Inputs = {
  phone: string;
  password: string;
};

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.signIn.currentStep);

  const [phone, setPhone] = useState("+7");
  const [password, setPassword] = useState("");

  const changeCurrentStep = (step: number) => {
    event?.preventDefault();
    dispatch(setCurrentStep(step));
  };

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: (data) => {
      dispatch(setAuth(data));
      dispatch(closeModal());
    },
  });

  return (
    <>
      <form
        className={styles.signInForm}
        onSubmit={handleSubmit((data) => signInMutation.mutate(data))}
      >
        {currentStep === 1 ? (
          <section className={styles.signInForm}>
            <label className={styles.formLabel}>Телефон</label>
            <input
              type="tel"
              placeholder="Введите ваш номер телефона"
              {...register("phone", { required: true })}
              defaultValue="+7"
              value={phone}
              onChange={(e) => setPhone(normalizePhoneNumber(e.target.value))}
            />

            {errors.phone?.message && <span>Введите номер телефона!</span>}
            <div className="authPrimaryButton">
              <UIButton
                buttonFn={() => changeCurrentStep(2)}
                buttonText="Вход"
                buttonType="button"
                size="l"
                color="primary"
                muted
                decoration="default"
              />
            </div>
          </section>
        ) : (
          <section className={styles.signInForm}>
            <label className={styles.formLabel}>Пароль</label>
            <input
              type="password"
              {...register("password", { required: true })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password?.message && <span>Введите пароль!</span>}
            <div className="authPrimaryButton">
              <UIButton
                buttonFn={() => console.log("press submit")}
                buttonText="Подтвердить"
                buttonType="submit"
                size="l"
                color="primary"
                muted={true}
                decoration="default"
              />
            </div>
          </section>
        )}
      </form>
    </>
  );
};

export default SignInForm;
