"use client";

import React, { FC, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, Icon, ImageField, UIButton } from "@/components";
import { useProfileContext } from "@/context";
import { IconEnum } from "@/types";

import { userSchema, UserSchemaType } from "./UserForm.schema";
import styles from "./UserForm.module.scss";

const UserForm: FC = () => {
  const { user, handleLogout } = useProfileContext();
  const [isEditing, setIsEditing] = useState(false);
  const [active, setActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const methods = useForm<UserSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(userSchema),
    values: user || undefined,
  });

  const { handleSubmit, setValue, formState } = methods;
  console.log("🚀 ~ formState:", formState.errors);

  const buttonsClassName = cn(styles["form__buttons"], {
    [styles["edit"]]: isEditing,
  });

  const onHandleCrossClick = () => {
    setIsEditing(!isEditing);
  };

  const submit: SubmitHandler<UserSchemaType> = async (data) => {
    console.log(
      "🚀 ~ constsubmit:SubmitHandler<UserSchemaType>= ~ data:",
      data
    );
  };

  const renderImageButtons = !active ? (
    <button
      type="button"
      className={`${styles["button"]} ${styles["button-text"]}`}
      onClick={() => {
        imageInputRef.current?.click();
      }}
    >
      <Icon icon={IconEnum.CAMERA} size={24} />
      <span>Edit photo</span>
    </button>
  ) : (
    <div className={styles["buttons"]}>
      <button
        type="button"
        onClick={() => {
          setActive(false);
          setValue("file", file);
        }}
        className={`${styles["button"]} ${styles["button-text"]}`}
      >
        <Icon icon={IconEnum.CHECK} size={24} />
        <span>Confirm</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setPreview(null);
          setFile(null);
          setActive(false);
        }}
        className={`${styles["button"]} ${styles["button-icon"]}`}
      >
        <Icon icon={IconEnum.CROSS} size={24} />
      </button>
    </div>
  );
  const image = preview || user?.avatarUrl || "";
  return (
    <FormProvider {...methods}>
      <form
        className={styles["form"]}
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <div className={styles["cross-btn-wrapper"]}>
          <UIButton
            variant="text"
            color="accent"
            iconSize={24}
            onClick={onHandleCrossClick}
            icon={!isEditing ? IconEnum.EDIT : IconEnum.CROSS}
          />
        </div>
        <div className={styles["form__image"]}>
          <div className={styles["thumb"]}>
            <ImageField
              name="file"
              inputRef={imageInputRef}
              preview={image}
              setPreview={setPreview}
              setActive={setActive}
              setFile={setFile}
              width={182}
              height={182}
              alt="user avatar"
            />
          </div>
          {isEditing ? renderImageButtons : null}
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
