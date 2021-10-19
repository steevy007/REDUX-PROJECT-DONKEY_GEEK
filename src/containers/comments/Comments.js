import React, { useEffect } from 'react'
import SingleComment from './SingleComment/SingleComment'
import { useSelector, useDispatch } from 'react-redux'
import { apiCall } from '../../redux/comments/Action/Action'
export default function Comments() {
    const comment = useSelector(state => state.Comments.commentaire)
    const isLoading = useSelector(state => state.Comments.isLoading)
    const error = useSelector(state => state.Comments.error)
    const dispatch = useDispatch()


    //console.log(isLoading, error, comment)

    useEffect(() => {
        dispatch(apiCall())
    }, [])

    return (
        <div className="row no-gutters p-2" >
            {
                !isLoading ?
                    'Loading..........' :
                    comment.map((val, key) => {
                        return <SingleComment text={val.body} email={val.email} key={key} />
                    })

            }
        </div>
    )
}
