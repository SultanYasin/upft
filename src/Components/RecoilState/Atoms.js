import { atom } from "recoil";

export const AtomCardNumber = atom({
    key: "card_number",
    default : "000",
})
export const AtomMeterNumber = atom({
    key: "meter_number",
    default : "000",
})
export const AtomRegisterDate = atom({
    key: "register_date",
    default : "000",
})
export const AtomName = atom({
    key: "user_name",
    default : "000",
})
export const AtomReadingDate = atom({
    key: "reading_date",
    default : "000",
})