/**
 * action方法
 * 
 */
import { INCREMENT } from '../constant'

/**        count    **/
export const increment = data => ({ type: INCREMENT, data })

export const incrementAsync = (data, time = 500) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREMENT, data })
    }, time)
  }
}

/** loading **/
export const loading = data => ({ type: 'loading',data })

/** alert  **/
export const alert = data => ({type:'alert', data})
export const clearAlert = () => ({type:'clearAlert'})

/** confirm  **/
export const confirm = data => ({type:'confirm', data})
export const clearConfirm = () => ({type:'clearConfirm'})