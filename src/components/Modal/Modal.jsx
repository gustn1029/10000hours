import React from "react";

export default function Modal({clickEvent}) {
  return (
    <section className="modal">
      <h2 className="hidden">1만 시간의 법칙 관련 모달</h2>
      <div>
        <p className="top-text">
          화이팅!!<span>♥♥♥</span>
        </p>
        <p className="desc">당신의 꿈을 응원합니다!</p>
      </div>
      <img src="/10000hours/images/licat.png" alt="라이캣 이미지" />
      <button type="button" className="custom-btn close-btn" onClick={clickEvent}>
        종료하고 진짜 <br className="mobile" />
        훈련하러 가기 GO!GO!
      </button>
    </section>
  );
}
