import React from 'react';
import './ExamData.css'

const ExamData = (props) => {
    return (
        <div className="col exam_wrapper p-2">
            <div
                className='p-3 block-date exam_border'>
                <h1 className="fw-bold">{new Date(props.date).toLocaleString('ru-Ru', {day: "numeric"})}</h1>
                <h2 className="fw-bold text-capitalize">{new Date(props.date).toLocaleString('ru-Ru', {month: "long"})}</h2>
            </div>
            <div className="block-text">
                <h1 className="title_exam">{props.name}</h1>
                <h6>{props.description}</h6>
            </div>
        </div>
    );
};

export default ExamData;