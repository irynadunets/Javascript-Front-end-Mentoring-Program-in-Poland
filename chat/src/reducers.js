import { nickname } from './utils/Nickname.js'

const initialState = {
  from: nickname(),
  message: '',
  rememberMe: false,
  messages: [],
}

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMEMBER_ME':
      return {
        ...state,
        rememberMe: action.rememberMe,
    };
    case 'ADD_NICKNAME':
      return {
        ...state,
        from: action.from,
    };        
    case 'ADD_MESSAGE':
      return {
        ...state,
       messages: [action.message,...state.messages]
     };
    default:
      return state;
}
}

export default reducer
