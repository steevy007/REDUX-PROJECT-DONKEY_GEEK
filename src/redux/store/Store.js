import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import PhoneReducer from '../reducer/Phone/PhoneReducer'
import TvReducer from '../reducer/Tv/TvReducer'
import CommentsReducer from '../reducer/Comments/CommentsReducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    phone:PhoneReducer,
    Tv:TvReducer,
    Comments:CommentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )
export default store