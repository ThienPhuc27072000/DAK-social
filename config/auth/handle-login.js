import axios from 'axios'

export const sendToLogin = () => {
    let auth = window.document.querySelectorAll(`.login`)
    var data = JSON.stringify({
        "usernameOrEmail": auth[0].value,
        "password": auth[1].value,
        "remember_me": auth[2].checked
    });

    var config = {
        method: 'post',
        url: 'http://115.79.140.218:9008/api/auth/login?locale=en',
        headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiMDJhN2E1LWEwZmMtNWI2Ni1iZjYwLWU5NGM0NWQxYjYxYiIsImlhdCI6MTY0ODQzNzUwMiwiZXhwIjoxNjQ4NDU1NTAyfQ.EPFzHePqRM-lfIRYG9ghufOsCN6DZjUFrdZA8K0auR8', 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    .then(function (response) {
        setCookieToClient(response.data.data.user, auth)
        location.replace("/")
    })
    .catch(function (error) {
        console.log(error);
    });

}

const setCookieToClient = (data, account) => {
    axios.post("./api/login", data);
    const nick = {
        username: account[0].value, 
        password: account[1].value
    }
    if (account[2].checked)
        axios.post("./api/auth-save-account", nick);
    else axios.post("./api/auth-save-account",  {
        username: "",
        password: ""
    });
}

const saveAccount = (data) => {

}