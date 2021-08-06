// import { useState } from 'react'
import axios from 'axios';
import { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm';
// import openHours from '../data';
const baseURL ='https://cookie-stand-api.herokuapp.com/';
const tokenURL =baseURL +'api/token/' ;
const refreshURL =baseURL +'api/token/refresh/';
const cookiesStandURL = baseURL+ 'api/v1/cookie-stands/';

export default function Home() {
    const [refreshToken,setRefreshToken]=useState('')
    const [token,setToken]=useState('')

    async function getToken(loginData){//{'username':'rudy','password':'rudy'}
        const fetchToken = await axios.post(tokenURL,loginData)
        setToken(fetchToken.data.access)
        setRefreshToken(fetchToken.data.refresh)
    }
    function loginHandler(credentials){
        getToken(credentials)
    }

    // console.log(token);
    if (!token) return(<LoginForm loginHandler={loginHandler}/>)
    return (
        <CookieStandAdmin token={token}/>
    )
}