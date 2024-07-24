"use client";

import React, { useState } from "react";
import { createContext } from "react";

type ModalType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalType | null>(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
