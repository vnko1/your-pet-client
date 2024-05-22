"use client";

import { FC, useEffect, useState } from "react";
import { ProfileProviderProps } from "./ProfileProvider.type";
import { ProfileContext } from "./hook";
import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user] = useState(null);

  useEffect(() => {
    privateApi.get(EndpointsEnum.Profile).then((res) => {
      console.log("🚀 ~ useEffect ~ res:", res);
    });
  }, []);

  return (
    <ProfileContext.Provider value={user}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
