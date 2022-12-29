import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateSample = () => {
  const navigate = useNavigate();

  // 뒤로가기
  // 인덱스로 처리, 두번 뒤로 가고 싶으면 -2
  const goBack = () => {
    if (window.confirm("정말로 나가시겠습니까?")) {
      navigate(-1);
    }
  };

  // 홈으로 가기
  const goHome = () => {
    if (window.confirm("정말로 나가시겠습니까?")) {
      navigate("/");
    }
  };

  return (
    <div>
      <button onClick={goBack}>뒤고가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default NavigateSample;
