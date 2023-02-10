import axios from "axios";
import { errorHandler } from "@/api/errorHandler";

const defaultConfig = {
    baseURL: 'https://vodopad-8df2c-default-rtdb.firebaseio.com',
    header: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-type',
        'Access-Control-Max-Age': '3600'
    },
};

const api = axios.create(defaultConfig);


// Используется для получение данных с сервера.
async function sendGet(url) {
    try {
        const response = await api.get(`${url}.json`);
        return response.data;
    } catch (e) {
        console.log(e);
        errorHandler.getErrorCode(e);
    }
}

// Используется для отправки данных на сервер.
async function sendPost(url, data) {
    try {
        await api.post(`${url}.json`, data);
    } catch (e) {
        console.log(e);
    }
}

// Используется для создания новых данных на сервере
async function sendPut(url, data) {
    try {
        await api.put(`${url}.json`, data);
    } catch (e) {
        console.log(e);
    }
}

// Используется для удаления существующих данных на сервере.
async function sendDelete(url) {
    try {
        await api.delete(url);
    } catch (e) {
        console.log(e);
    }
}


// Используется для внесений частичных изменений
async function sendPatch(url, data) {
    try {
        await api.patch(`${url}.    json`, data);
    } catch (e) {
        console.log(e);
    }
}

export { sendPost, sendGet, sendPut, sendDelete, sendPatch};
