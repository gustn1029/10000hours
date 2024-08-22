import React, { useState } from "react";
import LabelInput from "../input/LabelInput";

export default function MasteryForm({setData}) {
  const [domain, setDomain] = useState("");
  const [time, setTime] = useState("");

  const domainChangeHandler = (e) => {
    setDomain(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };

  const infoBtnClickHandler = () => {
    if (domain.trim() === "" || time.trim() === "") {
      return alert("도메인 또는 시간을 입력해주세요.");
    }
    let totalTime = 0;

    // 입력된 문자 제거 후 배열로 저장
    const numbers = time.match(/\d+/g);

    //   시간 입력됐을 때
    if (numbers !== null) {
      const hours = parseInt(numbers[0]);
      let minutes = 0;
      if (numbers.length !== 1) {
        minutes = parseInt(numbers[1]);
      }
      totalTime = hours * 60 + minutes;
    }

    //   기간 계산
    const period = Math.floor((10000 * 60) / totalTime);

    const newData = {
      domain: domain,
      time: period,
    };
    setData(newData);
  };
  return (
    <section className="section02">
      <h2 className="hidden">1만 시간의 법칙 계산</h2>
      <p>
        나는
        <LabelInput 
          label={`분야 입력 예) 프로그래밍`}
          id={`domain-input`}
          placeholder={`예) 프로그래밍`}
          inputValue={domain}
          inputOnChange={domainChangeHandler}
        />
        전문가가 될 것이다.
      </p>
      <p>
        그래서 앞으로 매일 하루에
        <br className="mobile" />
        <LabelInput 
          label={`훈련 시간 입력 예) 5시간`}
          id={`time-input`}
          placeholder={`예) 5시간`}
          inputValue={time}
          inputOnChange={timeChangeHandler}
        />
        시간씩 훈련할 것이다.
      </p>
      <button
        type="button"
        className="custom-btn info-btn"
        onClick={infoBtnClickHandler}
      >
        나는 며칠 동안 훈련을 해야 <br className="mobile" />
        1만 시간이 될까?
      </button>
    </section>
  );
}
