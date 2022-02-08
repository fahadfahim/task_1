import React from 'react';
import { IconButton, LinearProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './TasksOverView.css'
const TaskOverViewBody = ({ datas }) => {
    return (
        <>
            {
                datas.map((element,) => {
                    const { id, heading, sub_heading, percentage, img } = element
                    return (
                        <div className='task-body' key={id}>
                            <div className='task-logo-author'>
                                <div className='task-logo'>
                                    <img src={img} />
                                </div>
                                <div className='task-author'>
                                    <div className='task-auth-head'>
                                        <div className='task-auth-title'><h5>{heading}</h5></div>
                                        <div className='task-auth-sub-title'><p>{sub_heading}</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-progress'>
                                <div className='progress-percentage'>
                                    <p>{percentage}%</p>
                                    <LinearProgress className='bars' style={{ height: '8px', borderRadius: '5px', fill: '#009ef7' }} variant="determinate" value={percentage} />
                                </div>
                                <div className='progress-arrow'>
                                    <IconButton style={{ outlineStyle: 'none' }}><ArrowForwardIcon /></IconButton>
                                </div>
                            </div >
                        </div >
                    )
                })

            }
        </>
    )


};

export default TaskOverViewBody;
