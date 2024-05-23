import { MutableRefObject } from "react";

export type ImageFieldProps = {
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  imageUrl: string;
  width: number;
  height: number;
  alt: string;
  classNames?: string;
  imageClassNames?: string;
};
