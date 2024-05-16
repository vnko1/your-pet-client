"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { IconEnum } from "@/types";
import { Modal, UIButton } from "@/components";
// import { signOut } from "@/lib/actions";

import { LogOutModalProps } from "./LogOutModal.type";
import styles from "./logOutModal.module.scss";

const LogOutModal: FC<LogOutModalProps> = ({
  classNames,
  active,
  setVisible,
  visible,
  close,
}) => {
  const router = useRouter();

  const onHandleClick = async () => {
    close();
    // await signOut();
    router.refresh();
  };
  return (
    <Modal
      active={active}
      visible={visible}
      setVisible={setVisible}
      close={close}
      classNames={`${styles["modal"]} ${classNames}`}
    >
      <div className={styles["modal__content"]}>
        <h2 className={styles["title"]}>Already leaving?</h2>
        <div className={styles["modal__buttons"]}>
          <UIButton
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={close}
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
