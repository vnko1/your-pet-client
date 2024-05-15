"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { LogoutModal } from "@/app/ui";
import { ButtonsProps } from "./Buttons.type";

const Buttons: FC<ButtonsProps> = ({ user }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const onHandleClick = async () => {
    setIsActive(true);
  };

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
        onClick={onHandleClick}
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
        {user.name}
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

  const renderModal = (
    <LogoutModal setIsActive={setIsActive} isActive={isActive} />
  );
  return (
    <>
      {renderButtons}
      {renderModal}
    </>
  );
};

export default Buttons;
