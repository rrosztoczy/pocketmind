

const adapter = (url) => {
    // Moved headers into individual functions so the local storage call happens each time a dispatch is sent with thunk 
    // instead of prior to a jwt token existing when the adapters are initialized. It may be possible to wait to initialize
    // the adapters (except for the login one) after auth and prior to the rest of the actions instead for speed I decided sacrificing DRY in 
    // order to use the adapter pattern to further abstract my async actions in a quick, definite way was worth it.
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    //   }

    // Async functions are self-invoking for Thunk/Redux
    const getAll = async (dispatch, action) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }        
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, { headers: headers })
            const jsonData = await resp.json()
            dispatch({type: action, payload: jsonData})
        })();
    };

    const login = async (dispatch, action, email, password) => {
        (async () => {
            const config = { 
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    email: email,
                    password: password
                    }
                })
            }
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            const resp = await fetch(url, config)
            const jsonData = await resp.json()
            localStorage.setItem('jwt', jsonData.jwt) 
            dispatch({type: action, payload: jsonData.email})
        })();
    };

    // TODO: Do I need this or can I just use get all?
    const getProfile = async (dispatch, action) => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              }
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
            const postConfig = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(postBody)
            }
            dispatch({type: 'START_UPDATE_REQUEST'})
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
        login,
        getOne,
        create,
        update,
        destroy
        }
}

export default adapter