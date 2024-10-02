export default function TodoInput(props) {
    // eslint-disable-next-line react/prop-types
    const {handleAddTodos, todoValue, setTodoValue} = props

    const onClickHandler = () => {
        handleAddTodos(todoValue)
        setTodoValue('')
    }
    return (
        <header>
            <input value={todoValue} onChange={(event) => {
                setTodoValue(event.target.value)
            }
            } placeholder={"Enter Todo"}/>
            <button onClick={() => {
                onClickHandler()
            }}>Add
            </button>
        </header>
    )
}