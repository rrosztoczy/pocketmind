
const initialState = {
    memories: [{
        "id": 3,
        "user": {
          "userId": 1,
          "firstName": "admin",
          "lastName": "admin"
        },
        "thought_memories": [
          {
            "thoughtContent": "Atque qui ut quisquam voluptatem aut.",
            "thoughtObject": "Nicky",
            "reason": "voluptates"
          }
        ],
        "emotion_memories": [
          {
            "emotion": "grief",
            "intensity": 8,
            "pleasure": 8
          }
        ],
        "stress_level": 7,
        "anxiety_level": 1,
        "created_at": "2019-05-15T19:07:46.770Z",
        "time_of_memory": null
      }],
    logged_in: false
}

function memoryReducer(state = initialState, action) {
    console.log('about ot hit case!')
    switch (action.type) {
        case 'NEW_MEMORY':
        console.log('adding! hit add')
            return action.payload
        default: 
        console.log('hit default')
          return state;
    }
}

export default memoryReducer