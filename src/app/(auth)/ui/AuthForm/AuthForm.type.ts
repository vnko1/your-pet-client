import { HTMLInputTypeAttribute } from "react";
import * as z from "zod";
import { loginSchema, registerSchema } from "./AuthForm.schema";

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

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
