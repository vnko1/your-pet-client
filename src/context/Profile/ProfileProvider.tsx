"use client";

import { FC, useEffect, useState } from "react";
import { ProfileProviderProps } from "./ProfileProvider.type";
import { ProfileContext } from "./hook";
import { privateApi } from "@/services";
import { EndpointsEnum, User } from "@/types";
import { AxiosResponse } from "axios";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    privateApi.get(EndpointsEnum.Profile).then((res: AxiosResponse<User>) => {
      setUser(res.data);
    });
  }, []);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
