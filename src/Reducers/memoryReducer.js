import {
    TOGGLE_FORM,
    // Asynch types
    GET_ALL_MEMORIES,
    GET_MEMORY,
    CREATE_MEMORY,
    UPDATE_MEMORY,
    DESTROY_MEMORY
} from '../actions'

const initialState = {
    // Data from DB
    memories: [],
    // For CRUD
    memory: {},
    emotionMemories: [],
    thoughtMemories: [],
    // For displaying forms
    new: false,
    emotion: false,
    thought: false,
    stress: false,
    anxiety: false,
    logged_in: false
}

function memoryReducer(state = initialState, action) {
    console.log('about ot hit case!')
    switch (action.type) {
        case  GET_ALL_MEMORIES:
        console.log('adding memory! hit add')
        return {...state, memories: [...state.memories, ...action.payload]}
        case  DESTROY_MEMORY:
        console.log('destroying memory! hit destroy')
        return {...state, memories: state.memories.filter(memory => memory.id != action.payload)}
        case 'ADD_MEMORY':
        console.log('adding memory! hit add')
        return {...state, memories: [...state.memories, action.payload]}
        case 'ADD_STRESS_MEMORY':
          console.log('adding stress! hit add')
          return {...state, memory: {...state.memory, ...action.payload}}
        case 'ADD_ANXIETY_MEMORY':
        console.log('adding anxiety! hit add')
          return {...state, memory: {...state.memory, ...action.payload}}
        case 'ADD_EMOTION_MEMORY':
        console.log('adding emotion! hit add')
        return {...state, emotionMemories: [...state.emotionMemories, action.payload]}
        case 'ADD_THOUGHT_MEMORY':
        console.log('adding thought! hit add')
        return {...state, thoughtMemories: [...state.thoughtMemories, action.payload]}
        case TOGGLE_FORM:
          console.log("toggling!")
          return {...state, [action.payload]: !state[action.payload]}
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer