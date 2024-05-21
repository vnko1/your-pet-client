import { HTMLInputTypeAttribute } from "react";
import * as z from "zod";
import { registerSchema } from "./AuthForm.shema";

export type RegisterSchema = z.infer<typeof registerSchema>;

export type ResType =
  | { errors?: { [key: string]: string }; token?: string }
  | undefined
  | void;

export type AuthFormProps = {
  classNames?: string;
  path: "login" | "register";

  fields: {
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    fieldValidation: boolean;
  }[];
};
