"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { IconEnum } from "@/types";
import { Modal, UIButton } from "@/components";
// import { signOut } from "@/lib/actions";

import { LogOutModalProps } from "./LogOutModal.type";
import styles from "./logOutModal.module.scss";

const LogOutModal: FC<LogOutModalProps> = ({ classNames, ...props }) => {
  const router = useRouter();

  const onHandleClick = async () => {
    props.close();
    // await signOut();
    router.refresh();
  };
  return (
    <Modal classNames={`${styles["modal"]} ${classNames}`} {...props}>
      <div className={styles["modal__content"]}>
        <h2 className={styles["title"]}>Already leaving?</h2>
        <div className={styles["modal__buttons"]}>
          <UIButton
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={props.close}
          >
            Cancel
          </UIButton>
          <UIButton
            onClick={onHandleClick}
            variant="contained"
            color="secondary"
            fullWidth
            icon={IconEnum.LOGOUT}
            alignIcon="right"
          >
            Yes
          </UIButton>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
