"use client";

import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "classnames";

import { useGetScreenSize, useModal } from "@/hooks";
import { Icon, Popup } from "@/components";
import { useProfileContext } from "@/context";
import { ConstantsEnum, IconEnum, LinksEnum } from "@/types";

import { AdvModal } from "..";
import { Filter, FilterPopup } from "./components";

import styles from "./Filters.module.scss";

const Filters: FC = () => {
  const { user } = useProfileContext();
  const advModal = useModal(undefined, true);
  const { push } = useRouter();
  const [screenSize] = useGetScreenSize();

  const [popupIsActive, setPopupIsActive] = useState(false);
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const [selectedGenderCheckBoxes, setSelectedGenderCheckBoxes] = useState<
    string[]
  >([]);

  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has(ConstantsEnum.SEX))
      setSelectedGenderCheckBoxes(
        searchParams.get(ConstantsEnum.SEX)?.split(",") || []
      );
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedGenderCheckBoxes.length) {
      params.set(ConstantsEnum.PAGE_PARAM, "1");
      params.set(ConstantsEnum.SEX, selectedGenderCheckBoxes.join(","));
    } else {
      params.delete(ConstantsEnum.PAGE_PARAM);
      params.delete(ConstantsEnum.SEX);
    }

    replace(pathname + "?" + params.toString());
  }, [pathname, replace, searchParams, selectedGenderCheckBoxes]);

  const onHandleNavClick = () => {
    if (user) return push(LinksEnum.ADD_PET_CATEGORY);
    advModal.setActive(true);
  };

  const onHandleFilterClick = () => {
    setPopupIsActive(true);
  };

  const closePopup = () => {
    setPopupIsVisible(false);

    setTimeout(() => {
      setPopupIsActive(false);
    }, 300);
  };

  const filterClassNames = cn(styles["button"], styles["filter"], {
    [styles["active"]]: popupIsActive,
  });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["filters"]}>
        <div className={styles["filter__wrapper"]}>
          <button className={filterClassNames} onClick={onHandleFilterClick}>
            <span>Filter </span>
            <Icon icon={IconEnum.FILTERS} size={24} />
          </button>
          <Popup
            eventHandler={closePopup}
            isVisible={popupIsVisible}
            active={popupIsActive}
            setIsVisible={setPopupIsVisible}
            classNames={styles["popup"]}
            customAnimationClassNames={styles["active"]}
          >
            <FilterPopup
              selectedGenderCheckBoxes={selectedGenderCheckBoxes}
              setSelectedGenderCheckBoxes={setSelectedGenderCheckBoxes}
            />
          </Popup>
        </div>
        <button
          className={`${styles["button"]} ${styles["nav"]}`}
          onClick={onHandleNavClick}
        >
          <Icon
            icon={screenSize > 768 ? IconEnum.PLUS_SMALL : IconEnum.PLUS}
            size={24}
            className={styles["icon"]}
          />
          Add pet
        </button>
        <AdvModal {...advModal} />
      </div>
      <div className={styles["filter-btn-wrapper"]}>
        {selectedGenderCheckBoxes.map((item, index) => (
          <Filter
            key={index}
            label={item}
            setSelectedGenderCheckBoxes={setSelectedGenderCheckBoxes}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
