import { sendGet } from "@/api/index";


export async function getPostToCount(count){
    try {

        let response, responseCount, responseArray, responseGetCount;

        response = await sendGet('/blog');  // Proxy: Array
        responseCount = response.length - 1;
        responseArray = [];


        if (responseCount < (count - 1) ) responseGetCount = responseCount;
        else responseGetCount = responseCount - count;

        for (responseCount; responseCount > responseGetCount; --responseCount){

            responseArray.push(response[responseCount]);

        }

        response = responseArray;
        return response;

    }catch (e) {
        console.log(e)
    }
}
