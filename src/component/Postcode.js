import React, { useEffect, useRef, useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

const Postcode = () => {
  // const [mainAddress, setMainAddress] = useState();
  // const [detailAddress, setDetailAddress] = useState();
  const mainAddressRef = useRef();
  const detailAddressRef = useRef();
  const navigate = useNavigate();

  const MyHandleComplete = (data) => {
    console.log(data);
    mainAddressRef.current.value = data.address;
  };

  const handleSendAddress = () => {
    const mainAddress = mainAddressRef.current.value;
    const detailAddress = detailAddressRef.current.value;
    if (mainAddress === '') {
      alert('도로명 주소지를 설정하세요');
      return;
    }
    console.log(mainAddress);
    console.log(detailAddress);
    navigate('/nextpage', {
      state: {
        mainAddress,
        detailAddress,
      },
    });
  };

  const closeHandler = (state) => {
    console.log(state);
  };

  return (
    <>
      <div className="do_not_delete_this_div">
        <DaumPostcodeEmbed
          onComplete={MyHandleComplete}
          onClose={closeHandler}
        />
      </div>
      <input ref={mainAddressRef} placeholder="도로 주소명(자동)" disabled />
      <input ref={detailAddressRef} placeholder="상세 주소 기입" />
      <button className="btn  btn-info" onClick={handleSendAddress}>
        주소 설정 완료
      </button>
    </>
  );
};

export default Postcode;
