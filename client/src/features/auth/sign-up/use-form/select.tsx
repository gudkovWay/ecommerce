import * as React from "react";

import regions from "@/shared/api/regions.json";
import cities from "@/shared/api/city.json";
import styles from "./Select.module.scss";

interface UserSelectProps {
  value: "regions" | "city";
}

const UserSelect: React.FC<UserSelectProps> = ({ value }) => {
  const [city, setCity] = React.useState("");
  const [region, setRegion] = React.useState("");

  const regionSelect = regions.map((obj: any, index: number) => (
    <option key={index} value={obj.region}>
      {obj.region}
    </option>
  ));

  const citySelect = cities.map((obj: any, index: number) => (
    <option key={index} value={obj.city}>
      {obj.city}
    </option>
  ));

  return (
    <select id="userSelect" className={styles.userSelect} required>
      {value === "regions" ? regionSelect : citySelect}
    </select>
  );
};

export default UserSelect;
