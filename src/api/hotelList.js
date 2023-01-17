import { sendGet } from "@/api/index";



// ПЕРЕДЕЛАТЬ, ЧТОБЫ ПОЛУЧАТЬ МЕНЬШЕ ДАННЫХ ДЛЯ АДМИНКИ
    export async function getHotelAdminList(){
        try{
            const response = await sendGet('/hotels')
            return response;
        }catch(e){
            console.log(e);
        }
    }


    // Функция
    export async function getHotelPreview(){
        try{
            const response = await sendGet('/hotels')
            return response;
        }catch(e){
            console.log(e);
        }

    }
    export async function getHotelDeteil(){
        try{
            let response = await sendGet('/hotels')
            console.log(response)
            response = Object.values(response);
            return response;
        }catch(e){
            console.log(e);
        }
    }
    export async function getHotelRoomItems(){
        try{
            let response = await sendGet('/hotels')
            console.log(response)
            response = Object.values(response);
            return response;
        }catch(e){
            console.log(e);
        }
    }

