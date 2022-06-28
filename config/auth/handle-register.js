import jwt_decode from 'jwt-decode';
import jwt_encode from 'jwt-encode';
import axios from 'axios'
import { useState } from 'react'

export const handleSetDate = (day, month, year) => {
    return day+"-"+(month+1)+"-"+year;
}

export const formatDate = (date) => {
    const formattedDate = date.split('-');
    var day = formattedDate[0];
    var month = formattedDate[1];
    var year = formattedDate[2];

    if (formattedDate[1].length == 1) month = "0"+formattedDate[1];
    if (formattedDate[0].length == 1) day = "0"+formattedDate[0];
    return year+"-"+month+"-"+day;
}

export const setCookieToClient = (data, account) => {
    axios.post("./api/login", data);
    const nick = {
        username: account[1].value, 
        password: account[3].value
    }
    if (account[2].checked)
        axios.post("./api/auth-save-account", nick);
    else axios.post("./api/auth-save-account",  {
        username: "",
        password: ""
    });
}

export const sendToLoginByRegister = (username, password) => {
    let auth = window.document.querySelectorAll(`.register`)
    var data = JSON.stringify({
        "usernameOrEmail": username,
        "password": password,
        "remember_me": false
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
        console.log(response.data.date)
        // location.replace("/")
    })
    .catch(function (error) {
        console.log(error);
    });

}