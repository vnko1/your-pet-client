"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";
import { login, register } from "@/lib";

import { authSchema } from "./AuthForm.schema";
import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";
import {
  EndpointsEnum,
  isApiError,
  LinksEnum,
  LoginType,
  RegisterType,
} from "@/types";
import { useRouter } from "next/navigation";
import { api } from "@/services";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const schema = authSchema(path);
  const router = useRouter();

  type AuthSchemaType = z.infer<typeof schema>;

  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleRegister = async (data: RegisterType) => {
    const res = await register(data);

    if (res && isApiError(res))
      return methods.setError("root.serverError", {
        message: res.errorMessage,
        type: "custom",
      });

    router.push(LinksEnum.LOGIN);
  };

  const handleLogin = async (data: LoginType) => {
    const res = await api.post(EndpointsEnum.Login, data);
    console.log(res);
    // const res = await login(data);
    // console.log(res);
    // if (res && isApiError(res))
    //   return methods.setError("root.serverError", {
    //     message: res.errorMessage,
    //     type: "custom",
    //   });

    // router.push(LinksEnum.LOGIN);
  };

  const handleSubmit: SubmitHandler<AuthSchemaType> = async (data) => {
    methods.reset(data, { keepValues: true });
    if (isRegister) return handleRegister(data as RegisterType);
    handleLogin(data as LoginType);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={`${styles["form"]} ${classNames}`}
        noValidate
      >
        {fields.map((field, index) => (
          <FormField key={index} {...field} fieldIcons />
        ))}
        <div className={styles["form__button"]}>
          <UIButton type="submit" fullWidth color="secondary">
            {isRegister ? "Registration" : "Login"}
          </UIButton>
          {methods.formState.errors.root?.serverError ? (
            <p className={styles["form__error"]}>
              {methods.formState.errors.root?.serverError.message}
            </p>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUp;
