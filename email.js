
// document.querySelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input").value = "a6391175971"
// document.querySelector("#passwordNext > div > button").click()


// document.querySelector("#email").value = "adela_almazan@hotmail.com"
// document.querySelector("#pass").value = "adela12"
// document.getElementsByTagName("button")[0].click()



function getUrl() {
    axios.get("http://198.251.68.245:2020/url",

        {
            headers: {

                'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
            }
        })
        .then(function (response) {
            console.log(response.status)
        }).catch(function (error) {
            console.log(error)


        })

}


setInterval(getUrl, 1000);