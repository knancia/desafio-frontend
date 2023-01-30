import { key } from "@/credential/key";

async function initClient () {
    return new Promise(function(resolve) {
        console.log('first gapi: ',window.gapi)
        window.gapi.load('client',() => {
            console.log(window.gapi)
            window.gapi.client.init({apiKey: key}).then(() => {
                window.gapi.client.load('youtube', 'v3'). then(() => {

                    console.log('last gapi', window.gapi)

                    resolve(window.gapi)
                })
            })
        })
    })
    // await window.gapi.load('client', a)
    // await window.gapi.load({
    //     apiKey: key
    // });
    
    // await window.gapi.client.init('youtube', 'v3');
    // async function init() {
    //     await window.gapi.client.init({
    //         apiKey: key,
    //         // clientId: client_id,
    //         // scope: ['https://www.googleapis.com/auth/youtube']
    //     });
    //     console.log("pastel: ", window.gapi)
    // }


    // return window.gapi
}

export const gapi = window.gapi;
export default initClient;