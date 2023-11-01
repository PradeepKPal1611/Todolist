import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5173/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:5173/update/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:5173/delete/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <h2>ToDo LIST</h2>
            <Create />
            <br />
            {
                todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done ?
                                    <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                                    : <BsFillCheckCircleFill className='icon' />
                                }

                                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsCirclefill className='icon'
                                    onClick={() => handleDelete(todo._id)} /></span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export default Home;
