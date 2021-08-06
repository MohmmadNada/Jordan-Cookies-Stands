import Head2 from "./Head2"
import CookieStandHeader from "./Header"
import Footer from "./Footer"
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"
import { useEffect, useState } from 'react'
import openHours from '../data';
import axios from 'axios';

const baseURL ='https://cookie-stand-api.herokuapp.com/';
const cookiesStandURL = baseURL+ 'api/v1/cookie-stands/';
export default function CookieStandAdmin(props){
    const [cookiesDataHook,setCookiesDataHook] = useState([])
    const [locationMarket,setLocationMarket]=useState([])
    // getDataFromAPI()
    function cookiesFormHandler(event){ 
        event.preventDefault();
        const newLocations={ 
            location : event.target.location.value,
            maximum_customers_per_hour : event.target.minCustomers.value,
            maximum_customers_per_hour:event.target.maxCustomers.value,
            avgCustomersInput:event.target.avgCustomers.value,
            hourly_sales:openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value)),
            id: locationMarket.length-1
        } ;
        setLocationMarket([...locationMarket,newLocations])
    }
    useEffect(()=>{
        if (props.token){
            getDataFromAPI();
            console.log('cookiesDastaHook =>',cookiesDataHook);
        }
    },[props.token])
    async function getDataFromAPI(){
        const config = {headers: {'Authorization': 'Bearer  '+props.token }}  
        const cookiesData = await axios.get(cookiesStandURL,config);
        // console.log('cookiesData =>    ',cookiesData.data); // array with objects 
        //0: {id: 194, location: "Worcester", description: "", hourly_sales: Array(14), minimum_customers_per_hour: 3, …}

        /* average_cookies_per_sale: 3
            description: ""
            hourly_sales: (14) [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
            id: 194
            location: "Worcester"
            maximum_customers_per_hour: 3
            minimum_customers_per_hour: 3
            owner: null
        */
        setCookiesDataHook(cookiesData.data)
        // console.log(cookiesDataHook);
    }
return(
    <div className = "font-semibold ">
        <Head2/>
        <body className="">
            <CookieStandHeader herfOverview={'/'}/>
            <main className = "grid flex-grow h-screen p-10 bg-gray-500 justify-items-center">
                <CreateForm cookiesFormHandler={cookiesFormHandler} />
                <ReportTable locationMarket={locationMarket} />
            </main>
            <Footer totalMarkets={locationMarket.length}/>
        </body>
    </div>
    )
}