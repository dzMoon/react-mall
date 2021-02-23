// 创建redux库
import {createStore, applyMiddleware} from 'redux' 
// 支持redux-devtools
import {composeWithDevTools} from 'redux-devtools-extension'
// 支持异步
import thunk from 'redux-thunk'
// 引入reducer
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))