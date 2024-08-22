import React from 'react'

export default function Info({domain, time}) {
  return (
    <section className="section03">
        <h2 className="hidden">1만 시간의 법칙 계산 결과</h2>
        <p className="">
          당신은<em className={`domain-field ${domain.length > 5 ? "flex-col": ""}`}>{domain}</em>전문가가 되기
          위해서
        </p>
        <p>
          대략 <em className="time-field">{time}</em> 일 이상 훈련하셔야
          합니다! :&#41;
        </p>
      </section>
  )
}
