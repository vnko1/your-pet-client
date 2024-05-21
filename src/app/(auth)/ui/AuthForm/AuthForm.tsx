"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";

import { loginSchema, registerSchema } from "./AuthForm.schema";
import { AuthFormProps, LoginSchema, RegisterSchema } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";

  const methods = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    mode: "all",
  });

  const handleAction: SubmitHandler<LoginSchema | RegisterSchema> = async (
    formValues
  ) => {
    console.log("🚀 ~ handleAction ~ formData:", formValues);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAction)}
        className={`${styles["form"]} ${classNames}`}
        noValidate
      >
        {fields.map((field, index) => (
          <FormField key={index} {...field} fieldIcons />
        ))}
        <span>
          <UIButton type="submit" fullWidth color="secondary">
            {isRegister ? "Registration" : "Login"}
          </UIButton>
        </span>
      </form>
    </FormProvider>
  );
};

export default SignUp;
