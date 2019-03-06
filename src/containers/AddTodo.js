import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                id="addTodo"
                className="addTodo"
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
            <input  
                autoFocus={true}
                className="input__addTodo"
                ref={node => {
                    input = node
                }}
                
            />
            <button className="button is-normal is-outlined is-info" type="submit">Add Todo</button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo
