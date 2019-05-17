import adapter from './adapter'
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)
// action types
export const TOGGLE_FORM = 'TOGGLE_Form'
export const ADD_ALL_MEMORIES = 'ADD_ALL_MEMORIES'

// toggleForm: (event) => { dispatch({type: 'TOGGLE_FORM', payload: event.target.value}) },


// Other constants


// action creators

export function toggleForm(event) {
    return { type: TOGGLE_FORM, payload: event.target.value}
}

export function fetchMemories() {
  return dispatch => memoryAdapter.getAll(dispatch, ADD_ALL_MEMORIES)
}