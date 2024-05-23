import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type ImageFieldProps = {
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  width: number;
  height: number;
  alt: string;
  preview: string;
  setPreview: Dispatch<SetStateAction<string | null>>;
  setActive?: Dispatch<SetStateAction<boolean>>;
  classNames?: string;
  imageClassNames?: string;
  disabled?: boolean;
};
