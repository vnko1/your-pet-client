"use client";
import React, { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { UIButton } from "@/components";
import { IconEnum } from "@/types";

import { getCategory } from "./utils";
import { PetProps } from "./Pet.type";
import styles from "./Pet.module.scss";
import AdvModal from "../AdvModal/AdvModal";
import { useModal } from "@/hooks";

const Pet: FC<PetProps> = ({
  userId,
  pet: {
    _id,
    imageUrl,
    category,
    title,
    name,
    type,
    location,
    sex,
    price,
    favorites,
    owner: { email, phone },
    comment,
  },
}) => {
  const modalProps = useModal();
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((item) => item.toString() === userId)
  );
  const pathName = usePathname();

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.toString() === userId));
  }, [favorites, userId]);

  const onHandleFavoriteClick = async () => {
    if (!userId) return modalProps.setActive(true);
    _id;
    pathName;
    // if (isFavorite) {
    //   const res = await removeFromFavorite(_id.toString(), pathName);
    //   setIsFavorite(res.some((item) => item.toString() === userId));
    // } else {
    //   const res = await addToFavorite(_id.toString(), pathName);
    //   setIsFavorite(res.some((item) => item.toString() === userId));
    // }
  };

  return (
    <div className={styles["pet"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["pet__thumb"]}>
          <Image
            src={imageUrl}
            alt="pet"
            sizes="(min-width:320px) 100%"
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
          />
          <p className={`${styles["label"]} ${styles["category"]}`}>
            {getCategory(category)}
          </p>
        </div>
        <div className={styles["pet__info"]}>
          <h2 className={styles["title"]}>{title}</h2>
          <div className={styles["details"]}>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Name:</p>
              <p className={styles["info__value"]}>{name}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Type:</p>
              <p className={styles["info__value"]}>{type}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Place:</p>
              <p className={styles["info__value"]}>{location}</p>
            </div>
            {price ? (
              <div className={styles["info"]}>
                <p className={styles["info__name"]}>Price:</p>
                <p className={styles["info__value"]}>{price} UAH</p>
              </div>
            ) : null}
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>The sex:</p>
              <p className={styles["info__value"]}>{sex}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Email:</p>
              <a
                className={`${styles["info__value"]} ${styles["accent"]}`}
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Phone:</p>
              <a
                className={`${styles["info__value"]} ${styles["accent"]}`}
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["pet__comment"]}>
        <p>{comment}</p>
      </div>
      <div className={styles["pet__buttons"]}>
        <UIButton
          variant="outlined"
          color="secondary"
          fullWidth
          href={`tel:${phone}`}
        >
          Contact
        </UIButton>
        <UIButton
          variant="contained"
          color={isFavorite ? "primary" : "secondary"}
          fullWidth
          icon={IconEnum.HEART}
          alignIcon="right"
          onClick={onHandleFavoriteClick}
        >
          {isFavorite ? "Remove from" : "Add to"}
        </UIButton>
      </div>
      <AdvModal {...modalProps} />
    </div>
  );
};

export default Pet;
