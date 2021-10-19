import { BUY_TV } from "../../tv/Type/Type";
const initialTv={
    tv:15
}

const TvReducer=(state=initialTv,action)=>{
    switch(action.type){
        case BUY_TV:
            return {
                ...state,
                tv:state.tv-action.payload
            }
        default:return state
    }
}

export default TvReducer