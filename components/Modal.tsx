'use client';

import ModalTemplate from './Modals/ModalTemplate';
import { ModalContext } from './Provider';
import { useContext } from 'react';

const Modal = () => {
  const context = useContext(ModalContext);
  return context?.modalData.type && <ModalTemplate context={context} />;
};

export default Modal;
