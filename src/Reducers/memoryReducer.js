export default function 
memoryReducer(
    state = {
        memories: []
    },
    action
) {
    switch (action.type) {
        case 'NEW_MEMORY':
            // return state.items.concat(state.items.length + 1);
        default: return state;
    }
}