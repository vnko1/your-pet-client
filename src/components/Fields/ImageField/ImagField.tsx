"use client";
import React, { ChangeEvent, FC } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";

const ImagField: FC<ImageFieldProps> = ({
  setPreview,
  setActive,
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

    const urlImage = URL.createObjectURL(file);
    setPreview(urlImage);
    setActive && setActive(true);
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
        src={preview}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default ImagField;
