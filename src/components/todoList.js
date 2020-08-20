import React, { useState } from 'react';
import './todoList.css'
import Tasks from './tasks';
import AddTask from './addTask';

//Arreglar responsividad.

const TodoList = () => {

    const [taskList, setTaskList] = useState([]);

    const addTask = (e) => {
        if (e.keyCode === 13 && e.target.value !== "") {
            let tarea = e.target.value
            setTaskList(taskList.concat(tarea))
            e.target.value = ""
        }
    }

    const deleteTask = index =>{
        setTaskList((prevState) => {
            let auxiliar = [...prevState];
            auxiliar.splice(index, 1);
            return auxiliar
        }) 
    }

    

    return (
        <div className="container text-center col-10 col-md-6 mt-5">
            <div className="row">
                <div className="col-12 text-center m-auto">
                    <h1 className="pt-3">ToDo List</h1>
                </div>
            </div>
                <AddTask addTask={addTask} />
                <Tasks taskList={taskList} deleteTask={deleteTask} />
                <div className="text-start" id="cantidad">{taskList.length + " tasks"}</div>
        </div>
    )
};

export default TodoList;