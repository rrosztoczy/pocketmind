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
    emotionMemoriesAttributes: [],
    thoughtMemoriesAttributes: [],
    // For displaying forms
    new: false,
    edit: false,
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
        case  CREATE_MEMORY:
        console.log('creating memory! hit create')
        return {...state, memories: [...state.memories, action.payload]}
        case  UPDATE_MEMORY:
        console.log('updating memory! hit update')
        // Go through memories and change the values of each updated on based on id
        // Find the index of the memory to be updated
        // Replace that memory with the payload edited memory
        const memoryForUpdateIndex = state.memories.findIndex(memory => memory.id === action.payload.memoryId)
        // const memoryForUpdate = state.memories[memoryForUpdateIndex]
        // const updatedMemory = {...memoryForUpdate, action.payload.}
        // console.log('memory id is', action.payload.memoryId,' and index is', memoryForUpdateIndex)
        
        return {...state, memories: [...state.memories.slice(0, memoryForUpdateIndex), action.payload, ...state.memories.slice(memoryForUpdateIndex + 1)]}
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
        return {...state, memory: {...state.memory, emotionMemoriesAttributes: [...state.emotionMemoriesAttributes, action.payload]}}
        case 'ADD_THOUGHT_MEMORY':
        console.log('adding thought! hit add')
        return {...state, memory: {...state.memory, thoughtMemoriesAttributes: [...state.thoughtMemoriesAttributes, action.payload]}}
        case TOGGLE_FORM:
          console.log("toggling!")
          return {...state, [action.payload]: !state[action.payload]}
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer