

const adapter = (url) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    const getAll = async (dispatch, action) => {
        console.log('in the async... dispatch is', dispatch);
        (async () => {
            dispatch({type: 'START_GETTING_ALL_DATA_REQUEST'})
            console.log('started getting all data!')
            const resp = await fetch(url)
            const jsonData = await resp.json()
            console.log('data from api', jsonData)
            dispatch({type: action, payload: jsonData})
        })();
    };

    const getOne = async (id) => {
        const resp = await fetch(url + "/" + id)
        const jsonData = await resp.json()
        return jsonData
    };

    const create = async (postBody, handleUser) => {
        const postConfig = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(postBody)
        }
        const resp = await fetch(url, postConfig)
        const jsonData = await resp.json()
        console.log("response:", jsonData)
        handleUser ? handleUser(jsonData) : console.log("hi")
        return jsonData
    }

    const update = async (id, postBody) => {
        const postConfig = {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(postBody)
        }
        const resp = await fetch(url + "/" + id, postConfig)
        const jsonData = await resp.json()
        console.log("response:", jsonData)
        // return jsonData
    }


    const destroy = async (id, handleDestroy) => {
        const postConfig = {
            method: "DELETE",
            headers: headers
        }
        const resp = await fetch(url + "/" + id, postConfig)
        const jsonData = await resp.json()
        console.log("response:", jsonData)
        handleDestroy ? handleDestroy(jsonData) : console.log("hello")
        // return jsonData
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