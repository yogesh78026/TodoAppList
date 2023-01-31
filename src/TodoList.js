import React, { useState } from 'react'

export default function TodoList() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const addTodo = () => {
        setList((list) => {
            const updateList = [...list, todo]
            setTodo('')
            return updateList
        })
    }
    const remove = (i) => {
        const listData = list.filter((ele, id) => {
            return i !== id
        })
        setList(listData)
    }
    const removeAll = () => {
        setList([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>Todo List</div>
                <input type="text" placeholder='Add Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
                {list !== [] && list.map((data, i) => {
                    return (
                        <>
                            <div key={i}>
                                <div className='listData'>{data}</div>
                                <div className='btn-position'>
                                    <button onClick={() => remove(i)}>Remove</button>
                                </div>
                            </div>
                        </>
                    )
                })}
                {list.length >= 1 &&
                    <button onClick={removeAll}>Clear All</button>}
            </div>
        </>
    )
}