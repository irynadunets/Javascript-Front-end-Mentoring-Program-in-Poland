import { take, takeEvery, call, all, put, fork } from 'redux-saga/effects'
import {eventChannel} from 'redux-saga';
import { addMessage } from '../actions'
import { URL } from '../constants/Url'
import ReconnectingWebSocket from 'reconnecting-websocket';

function createSocketConnection(url) {
    return new ReconnectingWebSocket(url);
}

function createEventChannel(socket, param) {
  return eventChannel(emit => {
    socket.onopen = () => {
      console.log("wsc opened");
    };
    socket.onmessage = e => {
      const messages = JSON.parse(e.data)
      messages.forEach((message) => {
        put(param.store.dispatch(addMessage(message)));
      })
      if (document.visibilityState === "hidden") {
        var notification = new Notification('New message received')
      }
      return emit({data: JSON.parse(e.data)})
    };
    socket.onclose = () => {
      console.log("wsc closed");
    };
    return () => {
      socket.close();
    };
  });
}

function* handleNewMessage(socket) {
  yield takeEvery('SEND_MESSAGE', (action) => {
    socket.send(JSON.stringify({ from: action.from, message: action.message }))
  })
}

function* handleReconnect(socket, param) {
  yield take('RE_CONNECT', (action) => {
    //Refresh the connection if still open (close and then re-open it)
    socket.refresh();
  })
}

export default function* initializeWebSocketsChannel(param) {
  const socket = yield call(createSocketConnection, URL);
  fork(handleNewMessage, socket);
  fork(handleReconnect, socket);
  const channel = yield call(createEventChannel, socket, param);  
  while (true) {
    yield all([
      handleNewMessage(socket),
      handleReconnect(socket,param)
   ])
}
}
