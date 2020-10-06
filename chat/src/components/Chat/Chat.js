import React from 'react'
import SubmitMessage from '../../containers/SubmitMessage/SubmitMessage'
import SubmitNickname from '../../containers/SubmitNickname/SubmitNickname'
import MessageList from '../../containers/MessageList/MessageList'
import Reconnect from '../../containers/Reconnect/Reconnect'

import './Chat.css'

export default () => {
return (
      <div className="container">
        <Reconnect />
        <SubmitNickname />
        <SubmitMessage />
        <MessageList />
      </div>
    )
}
