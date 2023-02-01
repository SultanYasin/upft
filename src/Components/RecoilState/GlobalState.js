import { atom } from "recoil";

export const globalState = atom({
    key: "globalState",
    default: {
      facilityAddress: "",
      cardNumber: "",
      name: "",
      meterNumber: "",
      readingDate: "",
      meterSetting: "",
    },
  });
/* export const globalState = atom({
  key: "globalState",
  default: [
    {
      facilityAddress: "",
      cardNumber: "",
      name: "",
      meterNumber: "",
      readingDate: "",
      meterSetting: "",
    },
  ],
});
 */