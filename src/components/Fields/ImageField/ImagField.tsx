import React, { ChangeEvent, FC, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";

const ImagField: FC<ImageFieldProps> = ({
  name,
  inputRef,
  imageUrl,
  classNames,
}) => {
  const { register } = useFormContext();
  const { ref: registerRef, ...rest } = register(name);

  const [preview, setPreview] = useState<string>(imageUrl);

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  return (
    <label className={`${styles["field"]} ${classNames}`}>
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
      />
    </label>
  );
};

export default ImagField;
