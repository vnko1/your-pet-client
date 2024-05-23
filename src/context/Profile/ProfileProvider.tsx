"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";

import { privateApi } from "@/services";
import { EndpointsEnum, User } from "@/types";
import { logout } from "@/lib";

import { ProfileContext } from "./hook";
import { ProfileProviderProps } from "./ProfileProvider.type";

const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<null | User>(null);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    router.refresh();
  };

  useEffect(() => {
    privateApi.get(EndpointsEnum.Profile).then((res: AxiosResponse<User>) => {
      setUser(res.data);
    });
  }, []);

  return (
    <ProfileContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
