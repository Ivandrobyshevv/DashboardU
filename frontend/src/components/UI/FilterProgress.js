import React from 'react';

const FilterProgress = (props) => {
    const ProgressFilterHandler = (event) => {
        props.filter(event.target.value)
    }

    return (
        <select
            className="form-select form-select-xm fs-3"
            aria-label="example"
            id="filterProgress"
            onChange={ProgressFilterHandler}
        >
            <option value="0">Сортировать</option>
            <option value="1">По возрастанию</option>
            <option value="2">По убыванию</option>
        </select>
    );
};

export default FilterProgress;