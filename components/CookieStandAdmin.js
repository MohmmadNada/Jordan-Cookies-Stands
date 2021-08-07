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
            id: locationMarket.length,//average_cookies_per_sale // minimum_customers_per_hour
            location : event.target.location.value,
            minimum_customers_per_hour : event.target.minCustomers.value,
            maximum_customers_per_hour:event.target.maxCustomers.value,
            average_cookies_per_sale:event.target.avgCustomers.value,
            hourly_sales:openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value))
        } ;
        setLocationMarket([...locationMarket,newLocations])
        let newBranch={
 
        // id: locationMarket.length,
        location: event.target.location.value,
        description: "",
        hourly_sales: openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value)),
        minimum_customers_per_hour:event.target.minCustomers.value,
        maximum_customers_per_hour: event.target.maxCustomers.value,
        average_cookies_per_sale: event.target.avgCustomers.value,
        owner: 1    
        }
        async function postDataAPI(newBranch){
            const config = {headers: {'Authorization': 'Bearer  '+props.token }};
            const cookiesData = await axios.post('https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/',newBranch,config);
           };
           postDataAPI(newBranch);
        
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
    function deleteFromAPI(event){//246
        event.preventDefault();
        let idItem = event.target.deleteItem.value;
        let deleteURL=cookiesStandURL+idItem+'/'
        const config = {headers: {'Authorization': 'Bearer  '+props.token }}  
        axios.delete(deleteURL,config);
    }
    
return(
    <div className = "font-semibold ">
        <Head2/>
        <body className=""> 
            <CookieStandHeader herfOverview={'/'}/>
            <main className = "grid p-10">
          
                <CreateForm cookiesFormHandler={cookiesFormHandler}  /> 
                <ReportTable cookiesDataHook={cookiesDataHook} deleteFromAPI={deleteFromAPI}/> 
            </main>
            <Footer totalMarkets={cookiesDataHook.length}/>
        </body>
    </div>
    )
}