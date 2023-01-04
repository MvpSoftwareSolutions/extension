
// document.querySelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input").value = "a6391175971"
// document.querySelector("#passwordNext > div > button").click()


document.querySelector("#email").value = "adela_almazan@hotmail.com"
document.querySelector("#pass").value = "adela12"
document.getElementsByTagName("button")[0].click()


axios
    .get("http://198.251.68.245:2020/url", {
        responseType: "json",
    })
    .then(function (response) {
        console.log(response.data);
        alert(response.data)
    });