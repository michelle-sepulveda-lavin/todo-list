import React from 'react';

const AddTask = ({addTask}) => {
    return (
        <>
            <div className="row pt-3">
                <div className="col-12">
                    <input className="col-9" type="text" name="tasks" id="tasks" placeholder="Add a task here" onKeyDown={addTask}/>
                </div>
            </div>
        </>
    )
};

export default AddTask;