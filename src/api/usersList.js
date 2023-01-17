import { sendGet } from "@/api/index";

export async function UsersList(){
    try{
        let response = await sendGet('/users')
        console.log(response)
        response = Object.values(response);
        return response;
    }catch(e){
        console.log(e);
    }
}

