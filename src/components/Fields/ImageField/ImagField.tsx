"use client";
import React, { ChangeEvent, FC } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";
import { imagePlaceHolder } from "@/utils";

const ImagField: FC<ImageFieldProps> = ({
  setPreview,
  setActive,
  setFile,
  name,
  inputRef,
  preview,
  width,
  height,
  alt,
  classNames,
  imageClassNames,
  disabled,
}) => {
  const { register } = useFormContext();
  const { ref: registerRef, ...rest } = register(name);
  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const file = event.target.files[0];
    setFile(file);

    const urlImage = URL.createObjectURL(file);
    setPreview(urlImage);

    setActive && setActive(true);
    event.target.value = "";
  };

  return (
    <div className={`${styles["field"]} ${classNames}`}>
      <input
        type="file"
        {...rest}
        ref={(el) => {
          registerRef(el);
          inputRef.current = el;
        }}
        onChange={handleUploadedFile}
        className={styles["field__input"]}
        accept="image/*"
        aria-label="Image upload field"
        disabled={disabled}
      />
      <Image
        className={imageClassNames}
        width={width}
        height={height}
        alt={alt}
        src={preview || imagePlaceHolder}
        placeholder="blur"
        blurDataURL={imagePlaceHolder}
      />
    </div>
  );
};

export default ImagField;
