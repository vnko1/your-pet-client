"use client";
import React from "react";
import { NavButton, Pets } from "./ui";

import profileStyles from "./pets.module.scss";
import petsStyles from "./pets.module.scss";

function PetsPage() {
  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={profileStyles["title"]}>My pets:</h2>
        <NavButton />
      </div>
      <Pets />
    </div>
  );
}

export default PetsPage;
