/**
 * 统一暴露reducer
 */

import { combineReducers } from 'redux'
import { INCREMENT } from '../constant'
/**
 * 存储loading信息
 */
const loading = (preState, action) => {
  const { type, data } = action
  if (type === 'loading') return data === false ? false : true
  return false
}

/**
 * 存储alert信息
 */
const alert = (preState = { info: '', btn: '确定' }, action) => {
  const { type, data } = action
  if (type === 'alert') return { ...preState, ...data }
  if (type === 'clearAlert') return { ...preState, info: '' }
  return preState
}

/**
 * 存储confirm信息
 */
const confirm = (preState = { info: '', sure: '确定', cancel: '取消', }, action) => {
  const { type, data } = action
  if (type === 'confirm') return { ...preState, ...data }
  if (type === 'clearConfirm') return { ...preState, info: '' }
  return preState
}

/**
 * 存储count
 * 定义count方法
 */
const count = (preState = 0, action) => {
  const { data, type } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    default:
      return preState
  }
}
/**
 * 存储list
 * 定义list方法
 */
const list = (preState = [], action) => {
  const { data, type } = action
  switch (type) {
    case 'add':
      return [data, ...preState]
    default:
      return preState
  }

}
export default combineReducers({
  count,
  list,
  loading,
  alert,
  confirm
})
