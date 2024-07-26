"use client";

import React, { useState } from "react";
import { createContext } from "react";
import type { ProviderType } from "@/types/types";

export const ModalContext = createContext<ProviderType | null>(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [resultGenerateData, setResultGenerateData] = useState<
    ProviderType["resultGenerateData"] | undefined
  >(undefined);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        resultGenerateData,
        setResultGenerateData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
