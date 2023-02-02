import { key } from "@/credential/key";

async function initClient () {
    return new Promise(function(resolve) {
        window.gapi.load('client',() => {
            window.gapi.client.init({apiKey: key}).then(() => {
                window.gapi.client.load('youtube', 'v3'). then(() => {
                    resolve(window.gapi)
                })
            })
        })
    })
}

export const gapi = window.gapi;
export default initClient;