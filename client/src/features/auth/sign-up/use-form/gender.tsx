import { useState } from "react";
import { useForm } from "react-hook-form";
import { RadioGroup } from "@headlessui/react";
import styles from "./Gender.module.scss";

const genderOptions = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

const ChooseGender = () => {
  const { register } = useForm();
  var [gender, setGender] = useState(genderOptions[0]);

  return (
    <div className={styles.gender}>
      <RadioGroup value={gender} {...register("gender")} onChange={setGender}>
        <RadioGroup.Option value="male">
          {({ checked }) => (
            <span
              className={
                checked ? styles.gender__label__checked : styles.gender__label
              }
            >
              Мужской
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="female">
          {({ checked }) => (
            <span
              className={
                checked ? styles.gender__label__checked : styles.gender__label
              }
            >
              Женский
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
};

export default ChooseGender;
