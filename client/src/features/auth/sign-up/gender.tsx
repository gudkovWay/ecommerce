import { useState } from "react";

import styles from "./Gender.module.scss";

export default function ChooseGender() {
  return (
    <div>
      <select>
        <option>Мужской</option>
        <option>Женский</option>
      </select>
    </div>
  );
}
