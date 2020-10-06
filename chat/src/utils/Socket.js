import { URL } from '../constants/Url'
import { addMessage } from '../actions'

const setupSocket = (dispatch) => {

	const socket = new WebSocket(URL)

  socket.onopen = () => {
    console.log("wsc opened");
  }

  socket.onmessage = evt => {
    const messages = JSON.parse(evt.data)
      messages.forEach((message) => {
        dispatch(addMessage(message));
      })
      if (document.visibilityState === "hidden") {
        var notification = new Notification('New message received')
      }
  }

 socket.onclose = () => {
    console.log("wsc closed");
  }

	return socket
}

export default setupSocket
