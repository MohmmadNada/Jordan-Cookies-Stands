import Head2 from "./Head2"
import CookieStandHeader from "./Header"
import Footer from "./Footer"
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"
import { useState } from 'react'
import openHours from '../data';

export default function CookieStandAdmin(props){
    const [locationMarket,setLocationMarket]=useState([])
    function cookiesFormHandler(event){ 
        event.preventDefault();
        const newLocations={ 
            locationInput : event.target.location.value,
            minCustomersInput : event.target.minCustomers.value,
            maxCustomersInput:event.target.maxCustomers.value,
            avgCustomersInput:event.target.avgCustomers.value,
            hourlyCustomers:openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value)),
            id: locationMarket.length +1
        } ;
        setLocationMarket([...locationMarket,newLocations])
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