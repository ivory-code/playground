const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

const initialState = {
  number: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        number: state.number - 1,
      }
    default:
      return state
  }
}
