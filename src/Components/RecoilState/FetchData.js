import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  AtomCardNumber,
  AtomMeterNumber,
  AtomName,
  AtomReadingDate,
  AtomRegisterDate,
} from "./Atoms";
import Informations from "./Informations.JSON";

export default function FetchData() {
  const [name, setName] = useRecoilState(AtomName);
  const [cardNumber, setCardNumber] = useRecoilState(AtomCardNumber);
  const [registeringDate, setRegisteringDate] =
    useRecoilState(AtomRegisterDate);
  const [meterNumber, setMeterNumber] = useRecoilState(AtomMeterNumber);
  const [readingDate, setReadingDate] = useRecoilState(AtomReadingDate);

  //--------------------------------------------------------------

    useEffect(() => {
      axios
        .get(Informations)
        .then((res) => {
          const {
            readingDate,
            registeringDate,
            username,
            cardNumber,
            meterNumber,
          } = res.data.meter;

          setName(username);
          setCardNumber(cardNumber);
          setRegisteringDate(registeringDate);
          setMeterNumber(meterNumber);
          setReadingDate(readingDate);
        })
        .catch((err) => console.log(err));
    }, []);

    return <h2>Data: </h2>;
  };

