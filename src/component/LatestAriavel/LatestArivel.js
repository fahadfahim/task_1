import React, { useEffect, useState } from 'react';
import LatestArriavelBody from './LatestArriavelBody';
import './LatestArivel.css'
const LatestArivel = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:8000/datas').then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div className='latest'>
            <div className='latest-header'>
                <div className='latest-head'>
                    <div className='latest-title'><h5>Latest Arriavel</h5></div>
                    <div className='latest-sub-title'><p>More than 100 new products</p></div>
                </div>
                <div className='latest-icon'>
                    <i className="bi bi-ui-checks-grid"></i>
                </div>
            </div>
            {data && <LatestArriavelBody datas={data} />}
        </div >
    );
};

export default LatestArivel;
