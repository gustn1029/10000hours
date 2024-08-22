import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Info from "./Info";
import MainIntro from "./MainIntro";
import MasteryForm from "./MasteryForm";
import ActionButtons from "./ActionButtons";

export default function Main() {
  const [data, setData] = useState({});
  const [isModal, setIsModal] = useState(false);

  const modalBtnClickHandler = () => {
    setIsModal(true);
  };

  const modalCloseHandler = () => {
    setIsModal(false);
  };

  return (
    <>
      <MainIntro />
      <MasteryForm setData={setData} />
      {(data.domain && data.time) && (
        <>
          <Info domain={data.domain} time={data.time} />
          <ActionButtons modalBtnClickHandler={modalBtnClickHandler} />
        </>
      )}
      {isModal ? <Modal clickEvent={modalCloseHandler} /> : null}
    </>
  );
}
