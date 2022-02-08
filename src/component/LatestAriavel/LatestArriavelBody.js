import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './LatestArivel.css'
const LatestArriavelBody = ({ datas }) => {
    return (
        <>
            {datas.map((element) => {
                const { id, img, heading, sub_heading, users, language_1, language_2 } = element;
                return (
                    <div className='latest-body' key={id}>
                        <div className='latest-logo-author'>
                            <div className='latest-logo'>
                                <img src={img} />
                            </div>
                            <div className='latest-author'>
                                <div className='latest-auth-head'>
                                    <div className='latest-auth-title'><h5>{heading}</h5></div>
                                    <div className='latest-auth-sub-title'><p>{sub_heading}</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='latest-progress'>
                            <div className='latest-language'>
                                <span className='redis'>{language_1}</span>
                                <span className='violet'>{language_2}</span>
                            </div>
                        </div >
                        <div className='latest-users'>
                            <p>{users} Users</p>
                        </div>
                        <div className='progress-arrow'>
                            <IconButton style={{ outlineStyle: 'none' }}><ArrowForwardIcon /></IconButton>
                        </div>
                    </div >
                )
            })}
        </>
    )
};

export default LatestArriavelBody;
