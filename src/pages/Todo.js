import { useState, useEffect } from "react";
import * as TiIcons from 'react-icons/ti';

import '../App.css';

function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("todos"))
        return storageJobs ?? []
    });

    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState("")

    useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [])
  
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos] )


    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
    }


    const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

  
    const toggleComplete = (id) => {
        const updatedTodos = [ ...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        return todo
        })

        setTodos(updatedTodos)
    }

    const editTodo = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }
    
    
    

    return (
        <div>
            {/* <h1 className="title">Todo-list App</h1> */}

            <div className="todoWrapper">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="addTodo"  
                        type="text" 
                        onChange={(e) => setTodo(e.target.value)} 
                        value={todo} 
                        placeholder="Nhập vào công việc"
                    />
                    <button className="addTodoBtn" type="submit">Add</button>
                </form>
                
                <div className="todoList">
                    {todos.map((todo) => 
                        <div key={todo.id} className="todoItem">

                            <input 
                                className="completeTg"
                                type="checkbox" 
                                onChange={() => toggleComplete(todo.id)}
                                checked ={todo.completed}
                            />

                            {todoEditing === todo.id ? 
                                (<input 
                                    className="editTodo"
                                    type="text" 
                                    onChange={(e) => setEditingText(e.target.value)} 
                                    value={editingText} 
                                    placeholder="Chỉnh sửa công việc"
                                />) 
                                : 
                                (<div className="workText">{todo.text}</div>)
                            }
                            
                            
                            
                            

                            {todoEditing === todo.id ? 
                                (<button onClick={()=> editTodo(todo.id)}> Save</button>) 
                                : 
                                (<button onClick={()=> setTodoEditing(todo.id)}>Edit</button>)
                            }

                            <button className="delBtn" onClick={() => deleteTodo(todo.id)}> <TiIcons.TiDelete/>  </button> 

                           
                        
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;