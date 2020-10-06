import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SubmitMessage.css'
import { sendMessage } from '../../actions'

  export default () => {
    const dispatch = useDispatch()
    const from = useSelector(state => state.from)
    const [message, setMessage] = useState("");
      return (
        <form className = "new-message"
          action="."
          onSubmit={e => {
            e.preventDefault()
            dispatch(sendMessage(from, message))
            setMessage("")
          }}
        >
          <input className="input-message"
            type="text"
            placeholder={'Enter message...'}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className = "send-message" type="submit" >Send</button>
        </form>
      )
}
