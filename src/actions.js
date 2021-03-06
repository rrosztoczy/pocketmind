// Rails API BE adapters
import adapter from './adapter'

const userEndpoint = "http://localhost:3000/api/v1/users"
const loginEndpoint = "http://localhost:3000/api/v1/login"
const profileEndpoint = "http://localhost:3000/api/v1/profile"
const emotionEndpoint = "http://localhost:3000/api/v1/emotions"
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const thoughtMemoryEndpoint = "http://localhost:3000/api/v1/thought_memories"
const emotionMemoryEndpoint = "http://localhost:3000/api/v1/emotion_memories"
const activityMemoryEndpoint = "http://localhost:3000/api/v1/activity_memories"
const emotionAdapter = adapter(emotionEndpoint)
const memoryAdapter = adapter(memoryEndpoint)
const thoughtMemoryAdapter = adapter(thoughtMemoryEndpoint)
const emotionMemoryAdapter = adapter(emotionMemoryEndpoint)
const activityMemoryAdapter = adapter(activityMemoryEndpoint)
const userAdapter = adapter(userEndpoint)
const profileAdapter = adapter(profileEndpoint)
const loginAdapter = adapter(loginEndpoint)

// Async types
export const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES'
export const GET_ALL_USER_MEMORIES = 'GET_ALL_USER_MEMORIES'
export const GET_ALL_EMOTIONS = 'GET_ALL_EMOTIONS'
export const GET_ALL_THOUGHT_MEMORIES = 'GET_ALL_THOUGHT_MEMORIES'
export const GET_ALL_EMOTION_MEMORIES = 'GET_ALL_EMOTION_MEMORIES'
export const GET_ALL_ACTIVITY_MEMORIES = 'GET_ALL_EMOTION_MEMORIES'
export const GET_MEMORY = 'GET_MEMORY'
export const CREATE_MEMORY = 'CREATE_MEMORY'
export const UPDATE_MEMORY = 'UPDATE_MEMORY'
export const UPDATE_EMOTION_MEMORY = 'UPDATE_EMOTION_MEMORY'
export const UPDATE_THOUGHT_MEMORY = 'UPDATE_THOUGHT_MEMORY'
export const UPDATE_ACTIVITY_MEMORY = 'UPDATE_ACTIVITY_MEMORY'
export const DESTROY_MEMORY = 'DESTROY_MEMORY'
export const DESTROY_THOUGHT_MEMORY = 'DESTROY_THOUGHT_MEMORY'
export const DESTROY_EMOTION_MEMORY = 'DESTROY_EMOTION_MEMORY'
export const DESTROY_ACTIVITY_MEMORY = 'DESTROY_ACTIVITY_MEMORY'
export const CREATE_USER = 'CREATE_USER'
export const START_UPDATE_REQUEST = 'START_UPDATE_REQUEST'

// Auth types
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const AUTHENTICATING_USER = 'AUTHENTICATING_USER'
export const AUTHENTICATED_USER = 'AUTHENTICATED_USER'
export const LOGOUT = 'LOGOUT'

// Form and selector types
export const TOGGLE_FORM = 'TOGGLE_Form'
export const UPDATE_THOUGHT_SELECTION = 'UPDATE_THOUGHT_SELECTION'
export const UPDATE_ACTIVITY_SELECTION = 'UPDATE_ACTIVITY_SELECTION'
export const UPDATE_ACTIVITY_FORM_SELECTION = 'UPDATE_ACTIVITY_FORM_SELECTION'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const ADD_MEMORY = 'ADD_MEMORY'
export const ADD_EMOTION_MEMORY = 'ADD_EMOTION_MEMORY'
export const ADD_THOUGHT_MEMORY = 'ADD_THOUGHT_MEMORY'
export const ADD_ACTIVITY_MEMORY = 'ADD_ACTIVITY_MEMORY '

// CRUD actions prior to async API calls
export function addEmotionMemory(payload) {
    return {type: ADD_EMOTION_MEMORY, payload: payload}
}

export function addThoughtMemory(payload) {
    return {type: ADD_THOUGHT_MEMORY, payload: payload}
}

export function addActivityMemory(payload) {
    return {type: ADD_ACTIVITY_MEMORY, payload: payload}
}
 
// CRUD Actions with async API calls
export function getAllUserMemories() {
    return dispatch => profileAdapter.getAll(dispatch, GET_ALL_USER_MEMORIES)
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

// Emotions API calls
export function getAllEmotions() {
    return dispatch => emotionAdapter.getAll(dispatch, GET_ALL_EMOTIONS)
}

export function updateThoughtMemory(thoughtMemoryId, thoughtMemory) {
    return dispatch => thoughtMemoryAdapter.update(dispatch, UPDATE_THOUGHT_MEMORY, thoughtMemoryId, thoughtMemory)
}

export function destroyThoughtMemory(thoughtMemoryId) {
    return dispatch => thoughtMemoryAdapter.destroy(dispatch, DESTROY_THOUGHT_MEMORY, thoughtMemoryId)
}

// Emotion Memories API calls
export function updateEmotionMemory(emotionMemoryId, emotionMemory) {
    return dispatch => emotionMemoryAdapter.update(dispatch, UPDATE_EMOTION_MEMORY, emotionMemoryId, emotionMemory)
}

export function destroyEmotionMemory(emotionMemoryId) {
    return dispatch => emotionMemoryAdapter.destroy(dispatch, DESTROY_EMOTION_MEMORY, emotionMemoryId)
}

// Activity Memories API calls
export function updateActivityMemory(activityMemoryId, activityMemory) {
    return dispatch => activityMemoryAdapter.update(dispatch, UPDATE_ACTIVITY_MEMORY, activityMemoryId, activityMemory)
}

export function destroyActivityMemory(activityMemoryId) {
    return dispatch => activityMemoryAdapter.destroy(dispatch, DESTROY_ACTIVITY_MEMORY, activityMemoryId)
}  

// User, Login and Auth Actions
export function createUser(user) {
    return dispatch => userAdapter.create(dispatch, CREATE_USER, user)
}

export const loginUser = (email, password) => {
    return (dispatch) => loginAdapter.login(dispatch, SET_CURRENT_USER, email, password)
}

export const fetchCurrentUser = () => {
    return dispatch => profileAdapter.getAll(dispatch, SET_CURRENT_USER)
}
  
export const setCurrentUser = (userData) => ({
    type: SET_CURRENT_USER,
    payload: userData
})
    
export const logout = () => ({
    type: LOGOUT,
})
  
export const authenticatingUser = () => ({ type: AUTHENTICATING_USER })

// Form and select actions
export function toggleForm(event) {
  return { type: TOGGLE_FORM, payload: event.target.value}
}

export function updateThoughtSelection(event) {
  return { type: UPDATE_THOUGHT_SELECTION, payload: event.target.value}
}

export function updateActivitySelection(event) {
  return { type: UPDATE_ACTIVITY_SELECTION, payload: event.target.value}
}

export function updateActivityFormSelection(event) {
  return { type: UPDATE_ACTIVITY_FORM_SELECTION, payload: event.target.value}
}

export function incrementCounter(event) {
  return { type: INCREMENT_COUNTER, payload: event.counter}
}

