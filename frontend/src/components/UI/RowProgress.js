import React from 'react';
import './RowProgress.css'
import {getClassProgressBar, getEmoji, getFullName} from "../../services/utils";

const RowProgress = (props) => {


    return (
        <div className="mb-3">
            <h2 className="mx-5" style={{color: 'white'}}>{getFullName(props.firstName, props.lastName)}</h2>
            <div className="progress-block px-2">
                {getEmoji(props.totalGrate)}
                <div className="progress me-2">
                    <div className={getClassProgressBar(props.totalGrate)}
                         role="progressbar" style={{width: `${props.totalGrate}%`}}
                         aria-valuenow={props.totalGrate}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <h3 style={{color: 'white', fontWeight: 'bold'}}>{props.totalGrate}%</h3>
            </div>
        </div>
    );
};

export default RowProgress;