// js file

/**
 * 모달 on/off 함수
 * modalView -> 모달 on
 * modalClose -> 모달 off
 */
const viewBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

const modalView = () => {
  modal.classList.add("view");
};

const modalClose = () => {
  modal.classList.remove("view");
};

viewBtn.addEventListener("click", modalView);
closeBtn.addEventListener("click", modalClose);

/**
 * 입력 값 출력 함수
 */
const domain = document.getElementById("domain-input");
const time = document.getElementById("time-input");
const infoBtn = document.querySelector(".info-btn");

const getInputValue = () => {
  const domainTag = document.querySelector(".section03 p:first-child");
  const domainField = document.querySelector(".domain-field");
  const timeField = document.querySelector(".time-field");
  const domainVal = domain.value;
  const timeVal = time.value;
  let totalTime = 0;

  // 입력된 문자 제거 후 배열로 저장
  const numbers = timeVal.match(/\d+/g);

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

  //   분야, 시간 전부 입력됐을 때
  if (domainVal !== "" && timeVal !== "") {
    domainField.textContent = domainVal;
    timeField.textContent = period;

    if (domainVal.length > 5) {
      domainTag.classList.add("flex-col");
    } else {
      domainTag.classList.remove("flex-col");
    }
  } else {
    domainField.textContent = "프로그래밍";
    timeField.textContent = "5110";
  }
};

infoBtn.addEventListener("click", getInputValue);
