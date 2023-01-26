import { useState } from "react"

export const AddCategory = ({ onAddCategory/* setCategories */ }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 2) {
            return
        }

        onAddCategory(inputValue)
        // setCategories(categories => [inputValue, ...categories])

        setinputValue("")

    }

    return (
        <form onSubmit={event => onSubmit(event)}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={event => onInputChange(event)}
            />
        </form>
    )
}
