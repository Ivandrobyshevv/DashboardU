import axios from "axios";
import React from "react";
axios.defaults.baseURL = 'http://localhost:8000/'

export async function getData(path) {
    try {
        const response = await axios.get(path)
        return response.data;
    } catch (err) {
        console.error(err)
    }
}

export function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


export function getEmoji(totalGrate) {
    if (totalGrate > 80) {
        return <h1 className="me-2">&#129321;</h1>
    } else if (totalGrate > 60) {
        return <h1 className="me-2">&#128528;</h1>
    } else {
        return <h1 className="me-2">&#128565;</h1>
    }
}

const classProgressBar = 'progress-bar progress-bar-striped'

export function getClassProgressBar(totalGrate) {
    if (totalGrate > 80) {
        return `${classProgressBar} bg-success`
    } else if (totalGrate > 60) {
        return `${classProgressBar} bg-warning`
    } else {
        return `${classProgressBar} bg-danger`
    }
}

