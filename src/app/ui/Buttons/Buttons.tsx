"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";

import { ButtonsProps } from "./Buttons.type";

const Buttons: FC<ButtonsProps> = ({ user }) => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
    router.refresh();
  };

  const renderButtons = user ? (
    <>
      <UIButton
        variant="contained"
        size="small"
        color="secondary"
        icon={IconEnum.LOGOUT}
        alignIcon="right"
      >
        Log out
      </UIButton>
      <UIButton
        variant="text"
        size="small"
        color="secondary"
        icon={IconEnum.USER}
        alignIcon="left"
        onClick={() => navigate(LinksEnum.USER)}
      >
        {user}
      </UIButton>
    </>
  ) : (
    <>
      <UIButton
        variant="contained"
        size="small"
        icon={IconEnum.PET}
        alignIcon="right"
        href={LinksEnum.LOGIN}
      >
        Log IN
      </UIButton>
      <UIButton variant="outlined" size="small" href={LinksEnum.REGISTER}>
        Registration
      </UIButton>
    </>
  );

  return renderButtons;
};

export default Buttons;
