let webPresenterA_URL = "http://192.168.1.31"
// let webPresenterB_URL = "http://192.168.1.32"
// let webPresenterC_URL = "http://192.168.1.33"
// let webPresenterA_URL = "http://143.207.4.139"

let livestreamActivePlatformEndpoint = "/control/api/v1/livestreams/0/activePlatform"
let livestreamStatusEndpoint = "/control/api/v1/livestreams/0"

const livestreamRefresh_bttn = document.getElementById('livestream-refresh-bttn');
let webPresenterA_standard_txt = document.getElementById('wp-a-ss');
let webPresenterA_platform_txt = document.getElementById('wp-a-p');
let webPresenterA_server_txt = document.getElementById('wp-a-s');
let webPresenterA_key_txt = document.getElementById('wp-a-k');
let webPresenterA_passphrase_txt = document.getElementById('wp-a-pp');
let webPresenterA_quality_txt = document.getElementById('wp-a-q');


window.onload = function() {
    refresh_livestreamActivePlatform()
}

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

const refresh_livestreamActivePlatform = () => {
    sendHttpRequest('GET', webPresenterA_URL + livestreamActivePlatformEndpoint)
        .then(responseData => {
            responseData.json().then(data => {
                // var data = JSON.parse(response)
                // console.log(data.quality)
                webPresenterA_platform_txt.textContent = data.platform
                webPresenterA_server_txt.textContent = data.server
                webPresenterA_key_txt.textContent = data.key
                webPresenterA_passphrase_txt.textContent = data.passphrase
                webPresenterA_quality_txt.textContent = data.quality
            })

        })
        .catch(error => {
            console.log(error);
        })

    sendHttpRequest('GET', webPresenterA_URL + livestreamStatusEndpoint)
        .then(responseData => {
            responseData.json().then(data => {
                // var data = JSON.parse(response)
                // console.log(data.quality)
                webPresenterA_standard_txt.textContent = data.effectiveVideoFormat

            })

        })
        .catch(error => {
            console.log(error);
        })
}

if(window.location.href.endsWith('livestream.html')) {
    livestreamRefresh_bttn.addEventListener('click', refresh_livestreamActivePlatform)
}