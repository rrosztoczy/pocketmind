// Could make sense to refactor into Auth, Memory and Form reducers

import {
    TOGGLE_FORM,
    // Asynch types
    GET_ALL_USER_MEMORIES,
    GET_ALL_EMOTIONS,
    CREATE_MEMORY,
    UPDATE_MEMORY,
    UPDATE_EMOTION_MEMORY,
    UPDATE_THOUGHT_MEMORY,
    UPDATE_ACTIVITY_MEMORY,
    DESTROY_MEMORY,
    DESTROY_EMOTION_MEMORY,
    DESTROY_THOUGHT_MEMORY,
    DESTROY_ACTIVITY_MEMORY,
    INCREMENT_COUNTER,
    UPDATE_THOUGHT_SELECTION,
    UPDATE_ACTIVITY_SELECTION,
    CREATE_USER,
    START_UPDATE_REQUEST,
    SET_CURRENT_USER,
    ADD_MEMORY,
    ADD_ACTIVITY_MEMORY,
    ADD_EMOTION_MEMORY,
    ADD_THOUGHT_MEMORY,
    AUTHENTICATING_USER,
    AUTHENTICATED_USER,
    LOGOUT
} from '../actions'

const initialState = {
    // Data from DB
    memories: [],
    emotions: [],
    thoughtMemories: [],
    emotionMemories: [],
    activityMemories: [],
    memory: {    
        emotionMemoriesAttributes: [],
        thoughtMemoriesAttributes: [],
        activityMemoriesAttributes: []
      },
    new: false,
    edit: false,
    emotion: false,
    mood: false,
    energy: false,
    journal: false,
    idea: false,
    gratitude: false,
    balance: false,
    work: false,
    physical: false,
    social: false,
    entertainment: false,
    thoughtSelection: 'journal',
    activitySelection: 'work',
    activityOptions: false,
    emotionOptions: false,
    thoughtOptions: false,
    activityOptions: false,
    newThoughtMemoryFormContainer: false,
    newActivityMemoryFormContainer: false,
    thought: false,
    activity: false,
    updating: false,
    editThoughtMemories: false,
    editEmotionMemories: false,
    editActivityMemories: false,
    authenticatingUser: false,
    loggedIn: false,
    failedLogin: false,
    error: null,
    logged_in: false,
    user: null
}

function memoryReducer(state = initialState, action) {
    console.log('about ot hit case!')
    switch (action.type) {
        case  GET_ALL_EMOTIONS:
        console.log('emotion payload:', action.payload)
        return {...state, emotions: action.payload.filter(emotion => emotion.id > 64)}
        case  GET_ALL_USER_MEMORIES:
        console.log("hit get all user memories!")
        return {...state, memories: [...action.payload.memories]}
        case  DESTROY_MEMORY:
        console.log('destroying memory! hit destroy')
        return {...state, memories: state.memories.filter(memory => memory.id != action.payload)}
        case  DESTROY_THOUGHT_MEMORY:
        console.log('destroying thought memory! hit destroy')
        return {...state, thoughtMemories: state.thoughtMemories.filter(thoughtMemory => thoughtMemory.id != action.payload)}
        case  DESTROY_EMOTION_MEMORY:
        console.log('destroying emotion memory! hit destroy')
        return {...state, emotionMemories: state.emotionMemories.filter(emotionMemory => emotionMemory.id != action.payload)}
        // Refactor into discrete actions
        case  DESTROY_ACTIVITY_MEMORY:
        console.log('destroying ACTIVITY memory! hit destroy')
        return {...state, activityMemories: state.activityMemories.filter(activityMemory => activityMemory.id != action.payload)}
        // Refactor into discrete actions
        case  CREATE_MEMORY:
        console.log('creating memory! hit create')
        return {...state, memories: [...state.memories, action.payload], memory: {    
          emotionMemoriesAttributes: [],
          thoughtMemoriesAttributes: [],
          activityMemoriesAttributes: []
        }}
        case  UPDATE_MEMORY:
        console.log('updating memory! hit update')
        const memoryForUpdateIndex = state.memories.findIndex(memory => memory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', memoryForUpdateIndex)
        return {...state, updating: false}
        case  UPDATE_ACTIVITY_MEMORY:
        console.log('updating ACTIVITY memory! hit update')

        const activityMemoryForUpdateIndex = state.activityMemories.findIndex(activityMemory => activityMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', activityMemoryForUpdateIndex)
        return {...state, updating: false}
        case  UPDATE_THOUGHT_MEMORY:
        console.log('updating thought memory! hit update')
        const thoughtMemoryForUpdateIndex = state.thoughtMemories.findIndex(thoughtMemory => thoughtMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', thoughtMemoryForUpdateIndex)
        return {...state, updating: false}
        case  UPDATE_EMOTION_MEMORY:
        console.log('updating emotion memory! hit update')
        const emotionMemoryForUpdateIndex = state.emotionMemories.findIndex(emotionMemory => emotionMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', emotionMemoryForUpdateIndex)
        return {...state, updating: false}
        case ADD_MEMORY:
        console.log('adding memory! hit add')
        return {...state, memories: [...state.memories, action.payload]}
        case ADD_EMOTION_MEMORY:
        console.log('adding emotion! hit add')
        return {...state, memory: {...state.memory, emotionMemoriesAttributes: [...state.memory.emotionMemoriesAttributes, action.payload]}}
        case ADD_THOUGHT_MEMORY:
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, thoughtMemoriesAttributes: [...state.memory.thoughtMemoriesAttributes, action.payload]}}
        case ADD_ACTIVITY_MEMORY:
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, activityMemoriesAttributes: [...state.memory.activityMemoriesAttributes, action.payload]}}
        case  CREATE_USER:
        console.log('creating user! hit create', action.payload)
        return {...state, user: action.payload, loggedIn: true}
        case INCREMENT_COUNTER:
        console.log("INCREMENTING!")
        return {...state, [action.payload]: ++state[action.payload]}
        case TOGGLE_FORM:
          console.log("toggling!")
          return {...state, [action.payload]: !state[action.payload]}
          case UPDATE_THOUGHT_SELECTION:
          console.log("UPDATING THOUGHT SELECTION!")
          return {...state, thoughtSelection: action.payload}
          case UPDATE_ACTIVITY_SELECTION:
          console.log("UPDATING ACTIVITY SELECTION!")
          return {...state, activitySelection: action.payload}
          case SET_CURRENT_USER:
          console.log("setting current user", 'email is', action.payload)
          return { ...state, user: action.payload.email, loggedIn: true, authenticatingUser: false }
        case AUTHENTICATING_USER: //tells the app we're fetching
        console.log('authenticating user')
          return { ...state, authenticatingUser: true }
        case AUTHENTICATED_USER:
            console.log('authenticated user')
          return { ...state, authenticatingUser: false }
          case LOGOUT:
          localStorage.removeItem('jwt')
          return initialState
        case START_UPDATE_REQUEST:
          return {...state, updating: true}
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer