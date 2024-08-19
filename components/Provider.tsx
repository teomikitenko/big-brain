'use client';

import type { ProviderType } from '@/types/types';
import { ModalType } from '@/types/types';
import React, { useState } from 'react';
import { createContext } from 'react';

export const ModalContext = createContext<ProviderType | null>(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [modalData, setModalData] = useState<ModalType>({
    show: false,
    type: undefined,
    deleteData: undefined,
  });
  return <ModalContext.Provider value={{ modalData, setModalData }}>{children}</ModalContext.Provider>;
};

export default Provider;
