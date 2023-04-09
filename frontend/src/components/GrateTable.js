import React, {useEffect, useState} from 'react';
import RowMark from "./UI/RowMark";
import {getData} from "../services/utils";

const GrateTable = () => {
    const [marksData, setMarksData] = useState([]);
    const [performance, setPerformance] = useState([])

    async function getMarks() {
        const data = await getData('marks/')
        setMarksData(data);
        setPerformance(data[0].performance);
    }

    async function filterExamHandler(event) {
        console.log(event.target.value)
        const newPerformance = marksData.filter((mark) => mark.id === Number(event.target.value))[0].performance
        setPerformance(newPerformance);
    }

    useEffect(() => {
        getMarks()
    }, [])

    return (
        <>
            <div className="px-2 py-4 header_progress">
                <h2 style={{color: 'aliceblue'}}>Текущие оценки</h2>
                <select className="form-select form-select form-select-xm fs-3" onChange={filterExamHandler}>
                    {marksData.map((mark) => <option key={mark.id} value={mark.id}>{mark.name}</option>)}
                </select>
            </div>
            <hr style={{color: 'aliceblue'}}/>
            <div className="wrapper_progress-block">
                {performance.length === 0 ? (
                    <p className="none_info fs-1 mx-auto">Нет информации</p>
                ) : (
                    performance.map((userPerformance) =>
                        <RowMark key={userPerformance.id}
                                 firstName={userPerformance.user.name}
                                 lstName={userPerformance.user.surname}
                                 grate={userPerformance.grade}
                        />
                    )
                )}
            </div>
        </>
    );
};

export default GrateTable;