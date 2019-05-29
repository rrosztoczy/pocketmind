import {
    TOGGLE_FORM,
    // Asynch types
    GET_ALL_USER_MEMORIES,
    GET_ALL_EMOTIONS,
    GET_MEMORY,
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
    CREATE_USER
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
    editThoughtMemories: false,
    editEmotionMemories: false,
    editActivityMemories: false,
    authenticatingUser: "",
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
        return {...state, emotions: [...state.emotions, ...action.payload.filter(emotion => emotion.id > 64)]}
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
        return {...state, memories: [...state.memories.slice(0, memoryForUpdateIndex), action.payload, ...state.memories.slice(memoryForUpdateIndex + 1)]}
        case  UPDATE_ACTIVITY_MEMORY:
        console.log('updating ACTIVITY memory! hit update')
        const activityMemoryForUpdateIndex = state.activityMemories.findIndex(activityMemory => activityMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', activityMemoryForUpdateIndex)
        return {...state, activityMemories: [...state.activityMemories.slice(0, activityMemoryForUpdateIndex), action.payload, ...state.activityMemories.slice(activityMemoryForUpdateIndex + 1)]}
        case  UPDATE_THOUGHT_MEMORY:
        console.log('updating thought memory! hit update')
        const thoughtMemoryForUpdateIndex = state.thoughtMemories.findIndex(thoughtMemory => thoughtMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', thoughtMemoryForUpdateIndex)
        return {...state, thoughtMemories: [...state.thoughtMemories.slice(0, thoughtMemoryForUpdateIndex), action.payload, ...state.thoughtMemories.slice(thoughtMemoryForUpdateIndex + 1)]}
        case  UPDATE_EMOTION_MEMORY:
        console.log('updating emotion memory! hit update')
        const emotionMemoryForUpdateIndex = state.emotionMemories.findIndex(emotionMemory => emotionMemory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', emotionMemoryForUpdateIndex)
        return {...state, emotionMemories: [...state.emotionMemories.slice(0, emotionMemoryForUpdateIndex), action.payload, ...state.emotionMemories.slice(emotionMemoryForUpdateIndex + 1)]}
        case 'ADD_MEMORY':
        console.log('adding memory! hit add')
        return {...state, memories: [...state.memories, action.payload]}
        case 'ADD_EMOTION_MEMORY':
        console.log('adding emotion! hit add')
        return {...state, memory: {...state.memory, emotionMemoriesAttributes: [...state.memory.emotionMemoriesAttributes, action.payload]}}
        case 'ADD_THOUGHT_MEMORY':
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, thoughtMemoriesAttributes: [...state.memory.thoughtMemoriesAttributes, action.payload]}}
        case 'ADD_ACTIVITY_MEMORY':
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, activityMemoriesAttributes: [...state.memory.activityMemoriesAttributes, action.payload]}}
        case  CREATE_USER:
        console.log('creating user! hit create')
        return {...state, user: {...state.user, ...action.payload}, loggedIn: true}
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
          // *****************************************************************Auth***********************************************************
          // TODO: Evaluate set current user....
          case 'SET_CURRENT_USER':
          console.log("setting current user")
          //action.payload { username: 'Chandler Bing', bio: 'my user bio', avatar: 'some image url' }
          return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
        case 'AUTHENTICATING_USER': //tells the app we're fetching
          return { ...state, authenticatingUser: true }
        case 'AUTHENTICATED_USER':
          return { ...state, authenticatingUser: false }
          case 'LOGOUT':
          localStorage.removeItem('jwt')
          return { ...state, loggedIn: false }
        case 'FAILED_LOGIN': //for error handling
          return {
            ...state,
            failedLogin: true,
            error: action.payload,
            authenticatingUser: false
          }
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer