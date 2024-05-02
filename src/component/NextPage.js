import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();

  // const { mainAddress, detailAddress } = location.state;
  const mainAddress = location.state?.mainAddress;
  const detailAddress = location.state?.detailAddress;

  return (
    <>
      <h1>
        새로 받은 주소 값 :{' '}
        {`${mainAddress} 
        ${detailAddress}`}
      </h1>
    </>
  );
};

export default NextPage;
