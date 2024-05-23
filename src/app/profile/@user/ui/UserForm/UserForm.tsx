"use client";

import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import cn from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, Icon, UIButton } from "@/components";
import { useProfileContext } from "@/context";
import { IconEnum } from "@/types";

import { userSchema, UserSchemaType } from "./UserForm.schema";
import styles from "./UserForm.module.scss";

const UserForm: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, handleLogout } = useProfileContext();

  const methods = useForm<UserSchemaType>({
    mode: "all",
    resolver: zodResolver(userSchema),
    values: user || undefined,
  });

  const buttonsClassName = cn(styles["form__buttons"], {
    [styles["edit"]]: isEditing,
  });

  const onHandleCrossClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles["form"]} noValidate>
        <div className={styles["cross-btn-wrapper"]}>
          <UIButton
            variant="text"
            color="accent"
            iconSize={24}
            onClick={onHandleCrossClick}
            icon={!isEditing ? IconEnum.EDIT : IconEnum.CROSS}
          />
        </div>
        <div className={styles["form__content"]}>
          <FormField
            name="name"
            variant="small"
            label="Name:"
            type="text"
            disabled={!isEditing}
          />
          <FormField
            name="email"
            variant="small"
            label="Email:"
            type="email"
            disabled={!isEditing}
          />
          <FormField
            name="birthday"
            variant="small"
            label="Birthday:"
            type="text"
            disabled={!isEditing}
            placeholder="00.00.0000"
          />
          <FormField
            name="phone"
            variant="small"
            label="Phone:"
            type="text"
            disabled={!isEditing}
            placeholder="+380000000000"
          />
          <FormField
            name="city"
            variant="small"
            label="City:"
            type="text"
            placeholder="Kyiv"
            disabled={!isEditing}
          />
          <div className={buttonsClassName}>
            {isEditing ? (
              <UIButton
                color="secondary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Save
              </UIButton>
            ) : (
              <button
                className={styles["custom-btn"]}
                type="button"
                onClick={handleLogout}
              >
                <Icon size={24} icon={IconEnum.LOGOUT} /> <span>Log Out</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserForm;
