import React from 'react';

const Tasks = ({taskList, deleteTask}) =>{
    return(
        <>
            <div className="row">
                <div className="col-12 r m-auto">
                    <ul>
                        {taskList.length === 0? <span>No tasks, add a task!</span> : taskList.map((item, index)=>{
                            return <li key={index} id={index} onClick={()=>{deleteTask(index)}}>{item}</li>
                        }) }
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Tasks;