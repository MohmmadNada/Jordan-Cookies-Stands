import Head2 from "./Head2"
import CookieStandHeader from "./Header"
import Footer from "./Footer"
import { info } from "autoprefixer";
import { useState } from "react";
import axios from 'axios';
const baseURL ='https://cookie-stand-api.herokuapp.com';
const tokenURL =baseURL +'/api/token/' ;
const refreshURL =baseURL +'/api/token/refresh/';
const cookiesStandURL = baseURL+ '/v1/cookie-stands/';

export default function LoginForm(props){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [refresh,setRefresh]=useState('')
    const [token,setToken]=useState('')
    function submitHandler(event){
        event.preventDefault();
        let infoLogIn={
            'username': event.target.username.value,
            'password': event.target.password.value
        };
        // setUsername(event.target.username.value);
        // setPassword(event.target.password.value); // use onchange to void daily in save in hook 
        // console.log(username,password);

        return(
            // loginHandler(infoLogIn)
            getToken(infoLogIn)
            )
    }
    async function getToken(loginData){
        const fetchToken = await axios.post(tokenURL,loginData)
        // ["refresh", "access"] 
        // console.log(Object.values(fetchToken.data));
        setRefresh(Object.values(fetchToken.data)[0])
        setToken(Object.values(fetchToken.data)[1])
        console.log(token);
        console.log(refresh);
    }

    return(
        <dev>
        <Head2/>
        <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 font-semibold text-center bg-gray-200 border-2 border-gray-400 rounded-lg text-md" onSubmit={submitHandler}>
            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" />
            </div>

            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password"/>
            </div>

            <button className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50" type="submit">Sign In</button>
        </form>
        </dev>
    )
}