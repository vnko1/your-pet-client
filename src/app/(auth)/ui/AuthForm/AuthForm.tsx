"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";
import { register } from "@/lib";

import { authSchema } from "./AuthForm.schema";
import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";
import { IApiError, RegisterType } from "@/types";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const schema = authSchema(path);
  type AuthSchemaType = z.infer<typeof schema>;

  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleAction: SubmitHandler<AuthSchemaType> = async (data) => {
    try {
      const res = await register(data as RegisterType);
      console.log(
        "🚀 ~ consthandleAction:SubmitHandler<AuthSchemaType>= ~ res:",
        res
      );
    } catch (error) {
      console.log(
        "🚀 ~ consthandleAction:SubmitHandler<AuthSchemaType>= ~ error:",
        error
      );
      // if (error instanceof AxiosError)
    }
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
