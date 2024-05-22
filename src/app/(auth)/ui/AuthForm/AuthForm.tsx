"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";
import { login, register, sessionLogin } from "@/lib";
import { isApiError, LinksEnum, LoginType, RegisterType } from "@/types";
import { useProfileContext } from "@/context";

import { authSchema } from "./AuthForm.schema";
import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const schema = authSchema(path);
  const router = useRouter();
  const { setUser } = useProfileContext();
  const [isLoading, setIsLoading] = useState(false);

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
    const res = await login(data);

    if (res && isApiError(res))
      return methods.setError("root.serverError", {
        message: res.errorMessage,
        type: "custom",
      });
    await sessionLogin(res.data.access_token);
    setUser(res.data.data);
    router.push(LinksEnum.USER);
  };

  const handleSubmit: SubmitHandler<AuthSchemaType> = async (data) => {
    setIsLoading(true);
    methods.reset(data, { keepValues: true });
    try {
      if (isRegister) return handleRegister(data as RegisterType);
      await handleLogin(data as LoginType);
    } finally {
      setIsLoading(false);
    }
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
          <UIButton
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            fullWidth
            color="secondary"
          >
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
