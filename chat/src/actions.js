import { REMEMBER_ME, ADD_NICKNAME, SEND_MESSAGE, ADD_MESSAGE, RE_CONNECT } from './constants/ActionTypes'

export const rememberNickname = rememberMe => ({
	type: REMEMBER_ME,
	rememberMe
})

export const addUserNickname = from => ({
	type: ADD_NICKNAME,
	from
})

export const sendMessage = (from, message) => ({
	type: SEND_MESSAGE,
	from,
	message
})

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
	message,
})

export const reConnect = () => ({
  type: RE_CONNECT,	
})
