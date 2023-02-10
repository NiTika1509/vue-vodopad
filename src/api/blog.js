import { sendGet } from "@/api/index";




export async function sidebarBlogList(count){
    try {
        let response, responseCount, responseArray, responseGetCount;
        response = await sendGet('/blog');
        responseCount = response.length - 1;
        responseArray = [];

        if (responseCount < count) responseGetCount = responseCount
        else responseGetCount = responseCount - count

        for (responseCount; responseCount >= responseGetCount; responseCount--){

            responseArray.push(response[responseCount]);

        }

        response = responseArray

        return response

    }catch (e) {
        console.log(e)
    }
}
