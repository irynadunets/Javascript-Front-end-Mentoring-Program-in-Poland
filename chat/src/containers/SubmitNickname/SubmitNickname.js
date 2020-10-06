import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserNickname, rememberNickname } from '../../actions'
import './SubmitNickname.css'

export default () => {
  const dispatch = useDispatch()
  const from = useSelector(state => state.from)
  const rememberMe = useSelector(state => state.rememberMe)
  return (
    <form className = "nickname" onSubmit={e => {
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('from', rememberMe ? from : '');
    }
    }>
    <label>
      USER :  <input className="from" name="from" placeholder = {from}
                     value={from} onChange={ e => {
                                    e.preventDefault()
                                    dispatch(addUserNickname(e.target.value))
                                  }}
               />
    </label>
    <label>
      <input className="rememberMe" name="rememberMe" checked={rememberMe}
             onChange={ e => {
               e.preventDefault()
               dispatch(rememberNickname(e.target.checked))
             }} type="checkbox"/> Remember me
    </label>
    <button className = "save" type="submit">Save</button>
   </form>
    )
  }
