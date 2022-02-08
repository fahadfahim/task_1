import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './Tables.css'
import TasksOverView from '../TasksOverview/TasksOverView';
import LatestArivel from '../LatestAriavel/LatestArivel';
const Tables = () => {
    return (
        <div className='table'>
            <div className='table-header'>
                <h5>Tables</h5>
                <div className='table-header-btn'>
                    <button className='filter-btn'><FilterAltIcon style={{ height: '18px', color: '#7e8299' }} />Filter</button>
                    <button className='create-btn'>Create</button>
                </div>
            </div>

            <div className='table-contents'>
                <div className='table-content'>
                    <TasksOverView />
                </div>
                <div className='table-content'>
                    <LatestArivel />
                </div>
            </div>

        </div>
    )
};

export default Tables;
