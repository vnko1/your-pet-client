"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";

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
  type AuthSchemaType = z.infer<typeof schema>;

  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleAction: SubmitHandler<AuthSchemaType> = async (data) => {
    console.log("🚀 ~ handleAction ~ formData:", data);
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
