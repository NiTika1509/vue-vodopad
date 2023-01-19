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


    export async function getHotelDetail(id){
        try{
            let response = await sendGet('/hotels')
            response = response.forEach( (item) => {
                if(item.id === Number(id)) return item
            })
            console.log(response)
            return response
        }catch(e){
            console.log(e);
        }
    }


    export async function getHotelRoomItems(){
        try{
            let response = await sendGet('/rooms')
            console.log(response)
            response = Object.values(response);
            return response;
        }catch(e){
            console.log(e);
        }
    }

