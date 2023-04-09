import React from 'react';
import './RowMark.css'
import {getFullName} from "../../services/utils";

const RowMark = (props) => {
    return (
        <div className="item mb-3">
            <div className="item__content fw-bold fs-3">{getFullName(props.firstName, props.lstName)}</div>
            <div className="item__dotted"></div>
            <div className="item__btn fw-bold fs-3">{props.grate}</div>
        </div>
    );
};

export default RowMark;