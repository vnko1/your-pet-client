import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { LinksEnum } from "@/types";
import { ILogo } from "./logo.type";
import styles from "./logo.module.scss";

const Logo: FC<ILogo> = ({ classNames }) => {
  return (
    <>
      <Link
        href={LinksEnum.HOME}
        className={`${styles["logo"]} ${styles["mob"]} ${classNames}`}
      >
        <Image
          width={116}
          height={20}
          src="/images/logo_mob.webp"
          alt="Logo"
          placeholder="empty"
          priority
        />
      </Link>
      <Link
        href={LinksEnum.HOME}
        className={`${styles["logo"]} ${styles["tab"]} ${classNames}`}
      >
        <Image
          width={162}
          height={28}
          src="/images/logo.webp"
          alt="Logo"
          placeholder="empty"
          priority
        />
      </Link>
    </>
  );
};

export default Logo;
