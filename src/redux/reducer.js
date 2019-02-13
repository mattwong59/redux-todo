//My initial state of the list - dummy data
const initialState = {
    list: [ 'apples', 'bananas', 'oranges', 'pears' ]
};

const reducer = (state = initialState, action) => {
    let copyList = [];
    switch(action.type) {
        case ADD_TO_LIST:
        //Remember when altering data in redux, make sure to treat data as immutable,
        //Not changing existing data, instead assigning new data.
        //Assign a copy of the array created via .slice() method.
            copyList.push(action.payload);
        //Best to use console.logs to understand what your application is doing.
            console.log('--------------copyOfList', copyList);
        //Use spread operator with an object to assign a new array to array list property in state.
            return { ...state, list: copyList };
        
        case REMOVE_FROM_LIST:
        // Copy the array
            copyList = state.list.slice();
        // Removes last element of the array.
            copyList.pop();
        //Then return the state, with the list property assigned to a new array.
            return { ...state, list: copyList };
        //Make sure in your default case to return the state, if not it will return undefined.
        default:
            return state;
    }
}