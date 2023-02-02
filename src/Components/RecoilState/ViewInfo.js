import React from "react";
import FetchData from "./FetchData";
import { useRecoilValue } from "recoil";
import {  AtomName,  AtomCardNumber,  AtomRegisterDate,  AtomMeterNumber,  AtomReadingDate,} from "./Atoms";

function ViewInfo() {
  const name = useRecoilValue(AtomName);
  const cardNumber = useRecoilValue(AtomCardNumber);
  const registeringDate = useRecoilValue(AtomRegisterDate);
  const meterNumber = useRecoilValue(AtomMeterNumber);
  const readingDate = useRecoilValue(AtomReadingDate);

  return (
    <div>
      <FetchData />
      <div style={{ margin: "auto 10vh" }}>
        <p>Name: {name}</p>
        <p>Card Number: {cardNumber}</p>
        <p>Registering Date: {registeringDate}</p>
        <p>Meter Number: {meterNumber}</p>
        <p>Reading Date: {readingDate}</p>
      </div>
    </div>
  );
}

export default ViewInfo;
