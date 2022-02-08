import React, { useEffect, useState } from 'react';
import TaskOverViewBody from './TaskOverViewBody';
import './TasksOverView.css'
const TasksOverView = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:8000/datas').then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div className='task'>
            <div className='task-header'>
                <div className='task-head'>
                    <div className='task-title'><h5>Tasks OverView</h5></div>
                    <div className='task-sub-title'><p>Pending 10 tasks</p></div>
                </div>
                <div className='task-icon'>
                    <i className="bi bi-ui-checks-grid"></i>
                </div>
            </div>
            {data && <TaskOverViewBody datas={data} />}
        </div >
    );
};

export default TasksOverView;
