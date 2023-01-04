



const id = "";
const button = document.getElementById('button')
button.addEventListener('click', (e) => {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    e.preventDefault()
    const data = {
        email: username.value,
        password: password.value
    }
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/x-www-form-urlencoded',

    };
    const headersa = {
        "Access-Control-Allow-Origin": 'http://198.251.68.245:2020/'
    }
    axios.post("http://198.251.68.245:2020/login",
        data,
        { headers: headers })
        .then(function (response) {
            if (response.status === 200) {
                id == response.data.id
                console.log(response.data.id);
                alert(window.location)
                axios.get("http://198.251.68.245:2020/url",
                    { headers: headersa })
                    .then(function (response) {
                        console.log(response.status)
                    })

            }
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.data)
        });





})










