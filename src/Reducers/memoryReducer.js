
const initialState = {
    memory: {},
    emotionMemories: [],
    thoughtMemories: [],
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
        case 'ADD_MEMORY':
        console.log('adding memory! hit add')
            return action.payload
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
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer