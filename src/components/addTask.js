import React from 'react';

const AddTask = ({addTask}) => {
    return (
        <>
            <div className="row pt-5">
                <div className="col-12 p-0">
                    <input className="ml-5 pl-3" type="text" name="tasks" id="tasks" placeholder="Add a task here" onKeyDown={addTask}/>
                </div>
            </div>
        </>
    )
};

export default AddTask;