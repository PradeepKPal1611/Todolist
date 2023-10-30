import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = () => {
       
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
                            <div className='checkbox' onClick={handleEdit}>
                                <BsCirclefill className='icon' />
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsCirclefill className='icon' /></span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export default Home;
