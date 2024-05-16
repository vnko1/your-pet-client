"use client";

import { useState } from "react";

export const useModal = (timeout = 300) => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const close = () => {
    setVisible(false);
    setTimeout(() => setActive(false), timeout);
  };

  return { close, setActive, setVisible, visible, active };
};
