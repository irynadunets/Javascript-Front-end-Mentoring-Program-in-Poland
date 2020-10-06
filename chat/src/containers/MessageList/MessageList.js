import React from 'react'
import {  useSelector } from 'react-redux'
import ChatMessage from '../../components/ChatMessage/ChatMessage'

export default () => {
  const messages = useSelector(state => state.messages)
  return (
    <div>
  {messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            from={message.from}
            id={message.id}
            time={new Date(message.time).toUTCString()}
          />,
        )}
    </div>
      )
}
