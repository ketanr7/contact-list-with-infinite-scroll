import axios from "axios";

const initialState = {
  contactCollection: [],
  hasMore: true,
  loading: true
}


export default function contactListReducer(state = initialState, action) {
  switch (action.type) {
    case 'getContactsList': {
      var setHasMore
      if (action.payload !== undefined) {
        setHasMore = action.payload.length !== 0 ? true : false
      } else {
        setHasMore = false
      }
      return {
        ...state,
        hasMore: setHasMore,
        contactCollection: state.hasMore !== true ? state.contactCollection : state.contactCollection.concat(action.payload)
      };
    }
    default:
      return state
  }
}

// Thunk function


export function getContactsList({ page }) {
  return async function getMoviesForCardsThunk(dispatch, getState) {
    const params = { page: page,results:30 }
    const response = await axios.get('https://randomuser.me/api/', { params: params })
    console.log(response.data.results)
    if (response) {
      dispatch({ type: 'getContactsList', payload: response.data.results })
    }
  }
}





