"use client";
import { useContext } from "react";
import { ModalContext } from "./Provider";
import ModalTemplate from "./Modals/ModalTemplate";

const Modal = () => {
  const context = useContext(ModalContext);
  return (
<ModalTemplate context = {context}/>
  );
};

export default Modal;
