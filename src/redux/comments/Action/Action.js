import { LOAD_COMMENTS } from "../Type/Type";
import { LOAD_COMMENTS_FAILURE } from "../Type/Type";
import { LOAD_COMMENTS_SUCCESS } from "../Type/Type";
import axios from 'axios'
export const load_comments=()=>{
    return{
        type:LOAD_COMMENTS
    }
}

export const load_comments_succes=(comments)=>{
    return{
        type:LOAD_COMMENTS_SUCCESS,
        payload:comments
    }
}

export const load_comment_failure=(error)=>{
    return {
        type:LOAD_COMMENTS_FAILURE,
        payload:error
    }
}

export const apiCall=()=>{
    return dispatch =>{
        dispatch(load_comments())
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res=>{
                dispatch(load_comments_succes(res.data))
                //console.log(res.data)
            })
            .catch(err=>{
                dispatch(load_comment_failure(err))
            })
    }
}