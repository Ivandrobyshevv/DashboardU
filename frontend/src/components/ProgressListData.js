import React, {useEffect, useState} from 'react';
import './ProgressListData.css'
import RowProgress from "./UI/RowProgress";
import FilterProgress from "./UI/FilterProgress";
import {getData} from "../services/utils";

const ProgressListData = () => {
    const path = 'progress/'
    const [progressData, setProgressData] = useState([]);

    async function SelectedFilter(valueFilter) {
        if (valueFilter === '1') {
            const sortedData = [...progressData].sort((a, b) => {
                return a.total_grate - b.total_grate;
            });
            setProgressData(sortedData);
        } else if (valueFilter === '2') {
            const sortedData = [...progressData].sort((a, b) => {
                return b.total_grate - a.total_grate;
            });
            setProgressData(sortedData);
        } else {
            await getProgressData();
        }

    }

    async function getProgressData() {
        const progress = await getData(path)
        setProgressData(progress)
    }

    useEffect(() => {
        getProgressData()
    }, [])


    return (
        <>
            <div className="px-2 py-4 header_progress">
                <h1 style={{color: 'white'}}>Успеваемость</h1>
                <FilterProgress filter={SelectedFilter}/>
            </div>
            <hr style={{color: 'aliceblue'}}/>
            {progressData.map((userProgress) =>
                <RowProgress
                    key={userProgress.id}
                    firstName={userProgress.name}
                    lastName={userProgress.surname}
                    totalGrate={userProgress.total_grate}
                />
            )}
        </>
    );
};

export default ProgressListData;