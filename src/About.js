import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { search } = useLocation();

  const detail = search === '?detail=true'; //현재 지금 경로가(search) '?detail=true' 인지 확인

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;