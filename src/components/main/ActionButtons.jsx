import React from "react";

export default function ActionButtons({modalBtnClickHandler}) {
  return (
    <section className="section04">
      <h2 className="hidden">1만 시간의 법칙 관련 버튼 모음</h2>
      <button
        type="button"
        className="modal-btn custom-btn"
        onClick={modalBtnClickHandler}
      >
        훈련하러 가기 GO!GO!
      </button>
      <button type="button" className="share-btn custom-btn">
        공유하기
      </button>
    </section>
  );
}
