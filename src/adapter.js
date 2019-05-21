

const adapter = (url) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    const getAll = async (dispatch, action) => {
        (async () => {
            console.log("in the async")
            // Should i do a loading or something on this?
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const getOne = async (dispatch, action, id) => {
        (async () => {
            // Should i do a loading or something on this?
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const create = async (dispatch, action, postBody) => {
        (async () => {

            // format emotion and thought memories in the post body
            // create a copy of the body, replace the thought and emotion memory keys with hashes built from their arrays
            // const jsonPostBody = {...postBody}
            // const jsonEmotionMemories = jsonPostBody.emotionMemories.forEach((emotionMemory, index) => {[index]: emotionMemory})
            // const jsonThoughtMemories = jsonPostBody.thoughtMemories.forEach((thoughtMemory, index) => {[index]: thoughtMemory})
            // {...jsonPostBody, emotionMemories: jsonEmotionMemories}
            // {...jsonPostBody, thoughtMemories: jsonThoughtMemories}
            const postConfig = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({...postBody, userId: 1})
            }
            console.log("post body", postBody)
            console.log("json post body", postBody)
            // Should i do a loading or something on this?
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, postConfig)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    }

    const update = async (dispatch, action, id, postBody) => {
        (async () => {
            const postConfig = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(postBody)
            }
        // Should i do a loading or something on this?
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id, postConfig)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    }


    const destroy = async (dispatch, action, id) => {
        (async () => {
            const postConfig = {
                method: "DELETE",
                headers: headers
            }
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id, postConfig)
            // const jsonData = await resp.json()
            dispatch({type: action, payload: id})
        })();
    }


    return {
        getAll,
        getOne,
        create,
        update,
        destroy
        }
}

export default adapter