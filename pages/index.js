import { useState } from 'react'
import CookiesSandAdmin from '../components/CookieStandAdmin'
import openHours from '../data';
export default function Home() {
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
    return (
        <CookiesSandAdmin cookiesFormHandler={cookiesFormHandler} locationMarket={locationMarket} />
    )
    }