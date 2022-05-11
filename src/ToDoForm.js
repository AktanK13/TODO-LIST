import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [Input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(Input)
        setInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={Input}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />        
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm