// import { useState } from 'react'
import axios from 'axios';
import { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm';
// import openHours from '../data';
const baseURL ='https://cookie-stand-api.herokuapp.com/';
const tokenURL =baseURL +'api/token' ;
const refreshURL =baseURL +'api/token/refresh';
const cookiesStandURL = baseURL+ 'v1/cookie-stands/';


export default function Home() {
    const [token,setToken]=useState('');
    async function getToken(loginData){
        const fetchToken = await axios.post(tokenURL,loginData)
        console.log(fetchToken);
    }
    getToken
    if (!token) return(<LoginForm/>)
    return (
        <CookieStandAdmin/>
    )
}