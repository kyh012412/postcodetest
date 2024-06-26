import React, { useRef } from 'react';

const DaumPost = () => {
  const layerRef = useRef();
  const extraAddressRef = useRef();
  const postcodeRef = useRef();
  const addressRef = useRef();
  const detailAddressRef = useRef();

  const closeDaumPostcode = () => {
    // iframe을 넣은 element를 안보이게 한다.
    layerRef.current.style.display = 'none';
  };

  // function execDaumPostcode() {
  //   new Daum({
  //     oncomplete: onComp,
  //     width: '100%',
  //     height: '100%',
  //     maxSuggestItems: 5,
  //   }).embed(layerRef.current);

  //   // iframe을 넣은 element를 보이게 한다.
  //   layerRef.current.style.display = 'block';

  //   // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
  //   initLayerPosition();
  // }

  const onComplete = (data) => {
    // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    var addr = ''; // 주소 변수
    var extraAddr = ''; // 참고항목 변수

    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
    if (data.userSelectedType === 'R') {
      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddr +=
          extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddr !== '') {
        extraAddr = ' (' + extraAddr + ')';
      }
      // 조합된 참고항목을 해당 필드에 넣는다.
      extraAddressRef.current.value = extraAddr;
    } else {
      extraAddressRef.current.value = '';
    }

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    postcodeRef.current.value = data.zonecode;
    addressRef.current.value = addr;
    // 커서를 상세주소 필드로 이동한다.
    detailAddressRef.current.focus();

    // iframe을 넣은 element를 안보이게 한다.
    // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
    layerRef.current.style.display = 'none';
  };

  return (
    <div className="App">
      <input
        type="text"
        ref={postcodeRef}
        id="postcode"
        placeholder="우편번호"
      />
      {/* <input type="button" onClick={execDaumPostcode} value="우편번호 찾기" /> */}
      <br />
      <input
        type="text"
        ref={addressRef}
        id="sample2_address"
        placeholder="주소"
      />
      <br />
      <input
        type="text"
        ref={detailAddressRef}
        id="sample2_detailAddress"
        placeholder="상세주소"
      />
      <input
        type="text"
        ref={extraAddressRef}
        id="sample2_extraAddress"
        placeholder="참고항목"
      />

      {/* iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요  */}
      <div
        id="layer"
        ref={layerRef}
        style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;"
      >
        <img
          src="//t1.daumcdn.net/postcode/resource/images/close.png"
          id="btnCloseLayer"
          style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1"
          onClick={closeDaumPostcode}
          alt="닫기 버튼"
        />
      </div>
    </div>
  );
};

export default DaumPost;
