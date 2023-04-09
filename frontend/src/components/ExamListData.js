import React, {useEffect, useState} from 'react';
import './ExamListData.css'
import ExamData from "./UI/ExamData";
import {getData} from "../services/utils";


const ExamListData = () => {
    const [examData, setExamData] = useState([])

    async function getExamListData() {
        const data = await getData('exams/')
        setExamData(data)
    }

    useEffect(() => {
        getExamListData()

    }, [])


    return (
        <div className="container-fluid px-4 py-3 mb-3">
            <h2 className="title_block">Экзамены</h2>
            <div className="row g-4 py-3">
                {examData.map((exam) =>
                    <ExamData key={exam.id} name={exam.name} description={exam.description} date={exam.date_exam}/>
                )}
            </div>
        </div>
    );
};

export default ExamListData;