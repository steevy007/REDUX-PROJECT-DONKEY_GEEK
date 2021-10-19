import { BUY_TV } from "../Type/Type";

export const buy_tv=(quantite)=>{
    return {
        type:BUY_TV,
        payload:quantite
    }
} 