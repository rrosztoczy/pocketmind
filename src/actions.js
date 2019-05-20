import adapter from './adapter'

const emotionEndpoint = "http://localhost:3000/api/v1/emotions"
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const emotionAdapter = adapter(emotionEndpoint)
const memoryAdapter = adapter(memoryEndpoint)

// action types
export const TOGGLE_FORM = 'TOGGLE_Form'
// Async types
export const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES'
export const GET_ALL_EMOTIONS = 'GET_ALL_EMOTIONS'
export const GET_MEMORY = 'GET_MEMORY'
export const CREATE_MEMORY = 'CREATE_MEMORY'
export const UPDATE_MEMORY = 'UPDATE_MEMORY'
export const DESTROY_MEMORY = 'DESTROY_MEMORY'

// action creators
export function toggleForm(event) {
    return { type: TOGGLE_FORM, payload: event.target.value}
}

export function addEmotionMemory(payload) {
    return {type: 'ADD_EMOTION_MEMORY', payload: payload}
}

export function addThoughtMemory(payload) {
    return {type: 'ADD_THOUGHT_MEMORY', payload: payload}
}

export function addStressToMemory(payload) {
    return {type: 'ADD_STRESS_TO_MEMORY', payload: payload}
}

export function addAnxietyToMemory(payload) {
    return {type: 'ADD_ANXIETY_TO_MEMORY', payload: payload}
}
 
// export function handleSubmitEdit(event, payload) {
//     event.preventDefault()
//     return {type: UPDATE_MEMORY, payload: payload }
// }

// Async action creators
export function getAllMemories() {
  return dispatch => memoryAdapter.getAll(dispatch, GET_ALL_MEMORIES)
}

export function getMemory(memoryId) {
    return dispatch => memoryAdapter.getOne(dispatch, GET_MEMORY, memoryId)
}

export function createMemory(memory) {
    return dispatch => memoryAdapter.create(dispatch, CREATE_MEMORY, memory)
}

export function updateMemory(memoryId, memory) {
    return dispatch => memoryAdapter.update(dispatch, UPDATE_MEMORY, memoryId, memory)
}

export function destroyMemory(memoryId) {
    return dispatch => memoryAdapter.destroy(dispatch, DESTROY_MEMORY, memoryId)
}

// Emotions adapter
export function getAllEmotions() {
    return dispatch => emotionAdapter.getAll(dispatch, GET_ALL_EMOTIONS)
  }