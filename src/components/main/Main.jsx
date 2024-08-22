import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Info from "./Info";
import MainIntro from "./MainIntro";
import MasteryForm from "./MasteryForm";
import ActionButtons from "./ActionButtons";

export default function Main() {
  const [data, setData] = useState({
    domain: "프로그래밍",
    time: 5110,
  });
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
      <Info domain={data.domain} time={data.time} />
      <ActionButtons modalBtnClickHandler={modalBtnClickHandler} />
      {isModal ? <Modal clickEvent={modalCloseHandler} /> : null}
    </>
  );
}
