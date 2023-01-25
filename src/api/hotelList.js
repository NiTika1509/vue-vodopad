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
            response.forEach( (item) => {
                if(item.id === Number(id)) response = item
            });
            return response;
        }catch(e){
            console.log(e);
        }
    }


    export async function getHotelRoomItems(id){
        try{
            let response = await sendGet('/rooms');
            response = response.map( (item) => {
                if(item.parentId === Number(id)) {
                    return item;
                }
            });
            return response;
        }catch(e){
            console.log(e);
        }
    }

