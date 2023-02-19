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


    export async function getViewRooms(id){
        try{
            let response = await sendGet('/rooms');
            response = response.find( item => item.parentId === +id)
            return response.items;
        }catch(e){
            console.log(e);
        }
    }


    /*
    * @param String responseFormat.name
    * @param String responseFormat.photo
    * @param Number responseFormat.square
    * @param Array responseFormat.tags
    * @param Array responseFormat.category_items
    *
    * @return Array responseFormat
    * */
    export async function getListRooms(id){
        try{

            let response = await sendGet('/rooms'),
                responseFormat = []

            response = response.find( item => item.parentId === +id)




            response.items.forEach( (floor) => {

                floor.floorItems.forEach( (room) => {

                    let findCategory = responseFormat.find( category => category?.name === room.category);

                    if(!findCategory && room.status){
                        responseFormat.push({
                            name: room.category,
                            photo: room.photoGallery,
                            square: room.square,
                            items: [{
                                price: room.price,
                                status: room.status,
                                sleep: room.sleepPlace,
                                prepayment: room.prepayment,
                            }]
                        })
                    } else if(findCategory && room.status) {
                        findCategory.items.push({
                            price: room.price,
                            status: room.status,
                            sleep: room.sleepPlace,
                            prepayment: room.prepayment,
                        })
                    }

                })
            })

            response = responseFormat;

            return response;

        }catch(e){
            console.log(e);
        }
    }

