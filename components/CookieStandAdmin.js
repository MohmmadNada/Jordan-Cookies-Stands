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
             
        } ;
        setLocationMarket([...locationMarket,newLocations])
        locationMarket.length!=0 ? console.log(locationMarket[locationMarket.length-1]): console.log('Empty');
        let newBranch={
        id: locationMarket.length,//average_cookies_per_sale // minimum_customers_per_hour
        location : event.target.location.value,
        minimum_customers_per_hour : event.target.minCustomers.value,
        maximum_customers_per_hour:event.target.maxCustomers.value,
        average_cookies_per_sale:event.target.avgCustomers.value,
        hourly_sales:openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value))       
        }
        console.log(locationMarket);
        // return(newBranch,console.log(newBranch))
     
    }
    useEffect(()=>{
        if (props.token){
            getDataFromAPI();
        }
    },[props.token])
    async function getDataFromAPI(){
        const config = {headers: {'Authorization': 'Bearer  '+props.token }}  
        const cookiesData = await axios.get(cookiesStandURL,config);
        setCookiesDataHook(cookiesData.data)
    }
    async function postDataAPI(){
     const config = {headers: {'Authorization': 'Bearer  '+props.token }};
     const cookiesData = await axios.post('https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands',locationMarket,config);
    }
return(
    <div className = "font-semibold ">
        <Head2/>
        <body className=""> 
            <CookieStandHeader herfOverview={'/'}/>
            <main className = "grid p-10">
          
                <CreateForm cookiesFormHandler={cookiesFormHandler}  /> 
                <ReportTable cookiesDataHook={cookiesDataHook} postDataAPI={postDataAPI}/> 
            </main>
            <Footer totalMarkets={cookiesDataHook.length}/>
        </body>
    </div>
    )
}