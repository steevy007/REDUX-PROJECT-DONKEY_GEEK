import { LOAD_COMMENTS,LOAD_COMMENTS_SUCCESS,LOAD_COMMENTS_FAILURE } from "../../comments/Type/Type";
const initialComments={
    isLoading:false,
    commentaire:[],
    error:''
}

const CommentsReducer=(state=initialComments,action)=>{
    switch(action.type){
        case LOAD_COMMENTS:
            return{
                ...state,
                isLoading:true
            }
        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                commentaire:action.payload,
                error:''
            }
        case LOAD_COMMENTS_FAILURE:
            return {
                ...state,
                commentaire:[],
                error:action.payload
            }
        default:return state 
    }
}

export default CommentsReducer