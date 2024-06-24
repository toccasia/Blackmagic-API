let webPresenterA_URL = "http://192.168.1.31"
// let webPresenterB_URL = "http://192.168.1.32"
// let webPresenterC_URL = "http://192.168.1.33"

let livestreamActivePlatformEndpoint = "/control/api/v1/livestreams/0/activePlatform"
let videoFormatEndpoint = "/control/api/v1/system/videoFormat"

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    })
        .then((response) => {
            return response;
            console.log(body)
        })
}

function handleSubmit(event){
    event.preventDefault()

    const data= new FormData(event.target)
    const value = Object.fromEntries(data.entries())


    sendHttpRequest("PUT", webPresenterA_URL + videoFormatEndpoint, value)
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);