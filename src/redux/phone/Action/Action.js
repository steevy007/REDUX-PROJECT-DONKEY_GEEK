import { BUY_PHONE } from "../Type/Type";

export const buy_phone=(quantite)=>{
    return{
        type:BUY_PHONE,
        payload:quantite
    }
}