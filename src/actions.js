import adapter from './adapter'
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)
// action types
export const TOGGLE_FORM = 'TOGGLE_Form'
// Async types
export const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES'
export const GET_MEMORY = 'GET_MEMORY'
export const CREATE_MEMORY = 'CREATE_MEMORY'
export const UPDATE_MEMORY = 'UPDATE_MEMORY'
export const DESTROY_MEMORY = 'DESTROY_MEMORY'

// toggleForm: (event) => { dispatch({type: 'TOGGLE_FORM', payload: event.target.value}) },


// Other constants


// action creators

export function toggleForm(event) {
    return { type: TOGGLE_FORM, payload: event.target.value}
}


// Async action creators
export function getAllMemories() {
  return dispatch => memoryAdapter.getAll(dispatch, GET_ALL_MEMORIES)
}

export function getMemory(memory_id) {
    return dispatch => memoryAdapter.getOne(dispatch, GET_MEMORY, memory_id)
}

export function createMemory(memory) {
    return dispatch => memoryAdapter.create(dispatch, CREATE_MEMORY, memory)
}

export function updateMemory(memory_id, memory) {
    return dispatch => memoryAdapter.update(dispatch, UPDATE_MEMORY, memory_id, memory)
}

export function destroyMemory(memory_id) {
    return dispatch => memoryAdapter.destroy(dispatch, DESTROY_MEMORY, memory_id)
}