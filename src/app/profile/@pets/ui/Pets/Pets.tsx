"usc client";
import React, { FC, useEffect, useState } from "react";
import { isAxiosError } from "axios";

import { PetTypes } from "@/types";
import Pet from "../Pet/Pet";
import styles from "./Pets.module.scss";
import { getPets } from "@/lib";

const Pets: FC = () => {
  const [pets, setPets] = useState<Array<PetTypes>>([]);

  useEffect(() => {
    getPets()
      .then((res) => {
        setPets(res.data);
      })
      .catch((error) => {
        if (isAxiosError(error)) throw new Error(error.message);
      });
  }, []);

  return (
    <ul className={styles["pets"]}>
      {pets.map((pet) => (
        <li key={pet._id}>
          <Pet {...pet} setPets={setPets} />
        </li>
      ))}
    </ul>
  );
};

export default Pets;
