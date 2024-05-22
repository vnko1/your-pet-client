"use client";

import { FC, useEffect, useState } from "react";
import { ProfileProviderProps } from "./ProfileProvider.type";
import { ProfileContext } from "./hook";
import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user] = useState(null);

  useEffect(() => {
    console.log(1);
    privateApi(EndpointsEnum.Profile).then(console.log);
  }, []);

  return (
    <ProfileContext.Provider value={user}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
