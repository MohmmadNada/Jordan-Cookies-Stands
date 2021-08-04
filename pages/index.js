import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head2 from '../components/Head2'
import ReportTable from '../components/ReportTable'
import CookiesSandAdmin from '../components/CookieStandAdmin'
export default function Home() {
    const [locationMarket,setLocationMarket]=useState([])
    const [openHours,setOpenHours]=useState(['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'])
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
    return (
    <div className = "">
        <Head2/>
        <body className="">
            <Header herfOverview={'/overview'}/>
                <CookiesSandAdmin cookiesFormHandler={cookiesFormHandler} locationMarket={locationMarket} openHours={openHours}/>
            {/* <main className = "grid flex-grow h-screen p-10 bg-gray-500 justify-items-center">
                <CookiesSandAdmin cookiesFormHandler={cookiesFormHandler} />
                <ReportTable locationMarket={locationMarket} openHours={openHours}/>
            </main> */}
            <Footer totalMarkets={locationMarket.length}/>
        </body>
        
    </div>)}