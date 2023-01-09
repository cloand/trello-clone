import axios from "axios"

export const accountInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const getUserInfo = async() =>{
    axios.defaults.headers['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token'));  
    
    return await accountInstance({
        url: "account/getUserInfo",
        method: "GET",
        headers:{'Authorization':axios.defaults.headers['Authorization']}
    }).then(res =>{
        return res.data
    })
}

export const editUserInfo = async(payload) => {
    axios.defaults.headers['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token')); 
    return await accountInstance({
        url: "account/editUserInfo",
        method: "POST",
        headers:{'Authorization':axios.defaults.headers['Authorization']},
        data:payload
    }).then(res =>{
        return res.data
    })
}