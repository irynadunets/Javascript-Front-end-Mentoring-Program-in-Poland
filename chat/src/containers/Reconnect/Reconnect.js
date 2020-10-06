import React from 'react'
import { useDispatch } from 'react-redux'
import './Reconnect.css'
import { reConnect } from '../../actions'

export default () => {
    const dispatch = useDispatch()
      return (
        <button className = "reConnect" id = "reConnect" type="submit" onClick={() => {
          dispatch(reConnect())
        }}>Reconnect</button>
      )
}
