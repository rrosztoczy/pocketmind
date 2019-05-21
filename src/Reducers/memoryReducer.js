import {
    TOGGLE_FORM,
    // Asynch types
    GET_ALL_MEMORIES,
    GET_ALL_EMOTIONS,
    GET_ALL_THOUGHT_MEMORIES,
    GET_ALL_EMOTION_MEMORIES,
    GET_MEMORY,
    CREATE_MEMORY,
    UPDATE_MEMORY,
    UPDATE_EMOTION_MEMORY,
    UPDATE_THOUGHT_MEMORY,
    DESTROY_MEMORY,
    DESTROY_EMOTION_MEMORY,
    DESTROY_THOUGHT_MEMORY
} from '../actions'

const initialState = {
    // Data from DB
    memories: [],
    thoughtMemories: [],
    emotionMemories: [],
    // For CRUD
    memory: {    
        emotionMemoriesAttributes: [],
        thoughtMemoriesAttributes: []},
    emotionMemoriesAttributes: [],
    thoughtMemoriesAttributes: [],
    // For displaying forms
    new: false,
    edit: false,
    emotion: false,
    thought: false,
    stress: false,
    anxiety: false,
    editThoughtMemories: false,
    editEmotionMemories: false,
    logged_in: false
}

function memoryReducer(state = initialState, action) {
    console.log('about ot hit case!')
    switch (action.type) {
        case  GET_ALL_EMOTIONS:
        return {...state, emotions: [...state.emotions, ...action.payload]}
        case  GET_ALL_MEMORIES:
        return {...state, memories: [...state.memories, ...action.payload]}
        case  GET_ALL_THOUGHT_MEMORIES:
        return {...state, thoughtMemories: [...state.thoughtMemories, ...action.payload]}
        case  GET_ALL_EMOTION_MEMORIES:
        return {...state, emotionMemories: [...state.emotionMemories, ...action.payload]}
        case  DESTROY_MEMORY:
        console.log('destroying memory! hit destroy')
        return {...state, memories: state.memories.filter(memory => memory.id != action.payload)}
        case  DESTROY_THOUGHT_MEMORY:
        console.log('destroying thought memory! hit destroy')
        return {...state, thoughtMemories: state.thoughtMemories.filter(thoughtMemory => thoughtMemory.id != action.payload)}
        case  DESTROY_EMOTION_MEMORY:
        console.log('destroying emotion memory! hit destroy')
        return {...state, emotionMemories: state.emotionMemories.filter(emotionMemory => emotionMemory.id != action.payload)}
        case  CREATE_MEMORY:
        console.log('creating memory! hit create')
        return {...state, memories: [...state.memories, action.payload]}
        case  UPDATE_MEMORY:
        console.log('updating memory! hit update')
        const memoryForUpdateIndex = state.memories.findIndex(memory => memory.id === action.payload.id)
        console.log('memory id is', action.payload.id,' and index is', memoryForUpdateIndex)
        return {...state, memories: [...state.memories.slice(0, memoryForUpdateIndex), action.payload, ...state.memories.slice(memoryForUpdateIndex + 1)]}
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
        case 'ADD_STRESS_TO_MEMORY':
          console.log('adding stress! hit add')
          return {...state, memory: {...state.memory, ...action.payload}}
        case 'ADD_ANXIETY_TO_MEMORY':
        console.log('adding anxiety! hit add')
          return {...state, memory: {...state.memory, ...action.payload}}
        case 'ADD_EMOTION_MEMORY':
        console.log('adding emotion! hit add')
        return {...state, memory: {...state.memory, emotionMemoriesAttributes: [...state.memory.emotionMemoriesAttributes, action.payload]}}
        case 'ADD_THOUGHT_MEMORY':
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, thoughtMemoriesAttributes: [...state.memory.thoughtMemoriesAttributes, action.payload]}}
        case TOGGLE_FORM:
          console.log("toggling!")
          return {...state, [action.payload]: !state[action.payload]}
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer