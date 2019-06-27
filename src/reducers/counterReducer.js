const initialState = {
  count:0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD':
        return {
          ...state,
          count: state.count + action.payload
        }
      case 'REMOVE':
        return {
            ...state,
            count: state.count - action.payload
          }
      case 'RESET':
          return {
            ...state,
            count: 0
          }
      default:
          return state;
  }
}

export default counterReducer;