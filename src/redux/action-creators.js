//This is the action creator that adds a new item to the list

export function addToList(payload) {
    //Return the type of action is required, and optionally return a payload in which the reducer takes and manipulates the data
    return {
        type: ADD_TO_LIST,
        payload
    };
}

//This action creator returns an action type to remove last item of the list.

export function removeFromList() {
    return {
        type: REMOVE_FROM_LIST
    };
}

