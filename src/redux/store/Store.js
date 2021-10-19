import {createStore,combineReducers,applyMiddleware} from 'redux'
import PhoneReducer from '../reducer/Phone/PhoneReducer'
import TvReducer from '../reducer/Tv/TvReducer'
import CommentsReducer from '../reducer/Comments/CommentsReducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    phone:PhoneReducer,
    Tv:TvReducer,
    Comments:CommentsReducer
})
const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
    )
export default store