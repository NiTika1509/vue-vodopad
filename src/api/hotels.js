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
            const response = await sendGet('/hotels');
            return response;
        }catch(e){
            console.log(e);
        }
    }


    export async function getHotelDetail(id){
        try{
            let response = await sendGet('/hotels');
            response = response.find( item => item.id === +id)
            return response;
        }catch(e){
            console.log(e);
        }
    }


    export async function getHotelRoomItems(id){
        try{
            let response = await sendGet('/rooms');
            response = response.find( item => item.parentId === +id)
            return response.items;
        }catch(e){
            console.log(e);
        }
    }

