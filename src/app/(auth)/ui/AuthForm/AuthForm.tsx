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
import { isApiError, LinksEnum, RegisterType } from "@/types";
import { useRouter } from "next/navigation";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const schema = authSchema(path);
  type AuthSchemaType = z.infer<typeof schema>;
  const router = useRouter();

  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleAction: SubmitHandler<AuthSchemaType> = async (data) => {
    methods.reset(data, { keepValues: true });
    const res = await register(data as RegisterType);

    if (res && isApiError(res))
      return methods.setError("root.serverError", {
        message: res.errorMessage,
        type: "custom",
      });

    router.push(LinksEnum.LOGIN);
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
