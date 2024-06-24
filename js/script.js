const webPresenterA_onAirBttn = document.getElementById('wp-a-on-air-bttn');
const webPresenterA_offBttn = document.getElementById('wp-a-off-bttn')
const webPresenterB_onAirBttn = document.getElementById('wp-b-on-air-bttn');
const webPresenterB_offBttn = document.getElementById('wp-b-off-bttn')
const webPresenterC_onAirBttn = document.getElementById('wp-c-on-air-bttn');
const webPresenterC_offBttn = document.getElementById('wp-c-off-bttn')

let webPresenterA_URL = "http://192.168.1.31"
// let webPresenterB_URL = "http://192.168.1.32"
// let webPresenterC_URL = "http://192.168.1.33"
// let webPresenterA_URL = "http://143.207.4.139"

let livestreamActiveEndpoint = "/control/api/v1/livestreams/0/start"
let onAirEnableEndpoint = "/control/api/v1/livestreams/0/start"
let offEnableEndpoint = "/control/api/v1/livestreams/0/stop"



const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    })
        .then((response) => {
        // console.log(response)
        return response;
    })
}

function changeButtonColorA(color){
    webPresenterA_onAirBttn.style.backgroundColor = color
}

function changeButtonColorB(color){
    webPresenterB_onAirBttn.style.backgroundColor = color
}

function changeButtonColorC(color){
    webPresenterC_onAirBttn.style.backgroundColor = color
}


const PUT_onAir_A = () => {
    sendHttpRequest('PUT', webPresenterA_URL + onAirEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

const PUT_off_A = () => {
    sendHttpRequest('PUT', webPresenterA_URL + offEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

const PUT_onAir_B = () => {
    sendHttpRequest('PUT', webPresenterB_URL + onAirEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

const PUT_off_B = () => {
    sendHttpRequest('PUT', webPresenterB_URL + offEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

const PUT_onAir_C = () => {
    sendHttpRequest('PUT', webPresenterC_URL + onAirEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

const PUT_off_C = () => {
    sendHttpRequest('PUT', webPresenterC_URL + offEnableEndpoint)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        })
}

var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(sleep(duration).then(() => poll(promiseFn, duration)))

    async function livestreamActiveA(url) {
        // const response = await fetch(url)
        /*const response = await sendHttpRequest('GET', url);

        if (!response.ok) {
            throw new Error("HTTP error! status: ${response.status}")
        } else {
            const data = await response.json()
            if (data === true) {
                changeButtonColorA("red")
            } else {
                changeButtonColorA("white")
            }
        }*/

        await sendHttpRequest('GET', url)
            .then(async response => {
                const data = await response.json()
                if (data === true) {
                    changeButtonColorA("red")
                } else {
                    changeButtonColorA("white")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

async function livestreamActiveB(url) {
    await sendHttpRequest('GET', url)
        .then(async response => {
            const data = await response.json()
            if (data === true) {
                changeButtonColorB("red")
            } else {
                changeButtonColorB("white")
            }
        })
        .catch(error => {
            console.log(error);
        })
}

async function livestreamActiveC(url) {
    await sendHttpRequest('GET', url)
        .then(async response => {
            const data = await response.json()
            if (data === true) {
                changeButtonColorC("red")
            } else {
                changeButtonColorC("white")
            }
        })
        .catch(error => {
            console.log(error);
        })
}


    poll(() => new Promise(() => livestreamActiveA(webPresenterA_URL+livestreamActiveEndpoint)), 1000)
    poll(() => new Promise(() => livestreamActiveB(webPresenterB_URL+livestreamActiveEndpoint)), 1000)
    poll(() => new Promise(() => livestreamActiveC(webPresenterC_URL+livestreamActiveEndpoint)), 1000)

    webPresenterA_onAirBttn.addEventListener('click', PUT_onAir_A)
    webPresenterA_offBttn.addEventListener('click', PUT_off_A)
    webPresenterB_onAirBttn.addEventListener('click', PUT_onAir_B)
    webPresenterB_offBttn.addEventListener('click', PUT_off_B)
    webPresenterC_onAirBttn.addEventListener('click', PUT_onAir_C)
    webPresenterC_offBttn.addEventListener('click', PUT_off_C)




