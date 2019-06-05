

const adapter = (url) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }

    const getAll = async (dispatch, action) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }        
            console.log("in the all async")
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, { headers: headers })
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const getProfile = async (dispatch, action) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }
            console.log("in the async profile action is ", action)
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, { headers: headers })
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const getOne = async (dispatch, action, id) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }        
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id, { headers: headers })
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const create = async (dispatch, action, postBody) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }
            const postConfig = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postBody)
            }
            console.log("post body", postBody)
            console.log("json post body", postBody)
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, postConfig)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    }

    const update = async (dispatch, action, id, postBody) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }
              console.log("in the update async")
            const postConfig = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(postBody)
            }
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id, postConfig)
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    }

    const destroy = async (dispatch, action, id) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }
            const postConfig = {
                method: "DELETE",
                headers: headers
            }
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url + "/" + id, postConfig)
            dispatch({type: action, payload: id})
        })();
    }


    return {
        getAll,
        getProfile,
        getOne,
        create,
        update,
        destroy
        }
}

export default adapter