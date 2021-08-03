import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head2 from '../components/Head2'
import CreateForm from '../components/CreateForm' 
import ReportTable from '../components/ReportTable'
export default function Home() {
    // add useState as array , first is save place , second fun to set 
    const [locationMarket,setLocationMarket]=useState([]) // between ()is defult value
    const [openHours,setOpenHours]=useState(['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'])
    function cookiesFormHandler(event){ // function run when submit form 
        event.preventDefault(); // prevent refresh
        const newLocations={ // new location 
            locationInput : event.target.location.value,
            minCustomersInput : event.target.minCustomers.value,
            maxCustomersInput:event.target.maxCustomers.value,
            avgCustomersInput:event.target.avgCustomers.value,
            hourlyCustomers:openHours.map(hour=>Math.floor(Math.random() * (event.target.maxCustomers.value - event.target.minCustomers.value) + event.target.minCustomers.value)),
            id: locationMarket.length +1
        } 
        setLocationMarket([...locationMarket,newLocations])//get new location data and set add it to collection

    }
    function resultTable(){
        if (locationMarket.length == 0 ){
            return(
                'No Cookies Stands Available'
            );
        }
        else{
            return JSON.stringify(locationMarket)
        }
        
    }
    function createRows(locationName){
        return(
                locationName.hourlyCustomers.map(item=>{
                    <td>{item}</td>
                })
        );
    }
    return (

    <div className = "">
        <Head2/>
        
        <body className="">
            {/* header component   */}
            <Header herfOverview={'/overview'}/>
            <main className = "grid h-screen p-10 bg-gray-500 justify-items-center">
                {/* CreateForm component */}
                <CreateForm cookiesFormHandler={cookiesFormHandler}/>
                {/* ReportTable component */}
                {/* <ReportTable resultTable={resultTable}/> */}
                        <p className='w-4/5 grid-flow-col p-2 text-center bg-blue-300 rounded-lg h-3/5' >
                        <p className='text-xl'>
                            <table className='border border-blue-600'>
                                <thead>
                                    <tr>
                                        <th>Location</th>
                                    {/* add th tag from locations */}
                                        {openHours.map(item=>{
                                            return(
                                                <td>{item}</td>
                                            )
                                        })}
                                        <th>Totals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {locationMarket.map(oneMarket=>{
                                            return(
                                                <tr>
                                                    <td>
                                                    {oneMarket.locationInput}
                                                    </td>
                                                {oneMarket.hourlyCustomers.map(oneHour=>{
                                                    return(
                                                        
                                                    <td>
                                                        {oneHour}
                                                    </td>
                                                        );    
                                            })}

                                                {
                                                oneMarket.hourlyCustomers.map(numbCus =>{
                                                        return <td>{numbCus}</td>
                                                })
                                                }
                                                </tr>
                                            );
                                        })}
                                </tbody>
                                
                                <thead>
                                    <tr>
                                            <th>Totals</th>
                                            {openHours.map(item=>{
                                                return(
                                                    <td>sum    
                                                    </td>
                                                )
                                            })}

                                            <th>Totals</th>
                                    </tr>
                                </thead>

                            </table>
                            {/* {resultTable()} */}
                        </p>
                        </p>
            </main>
            <Footer totalMarkets={locationMarket.length}/>
        </body>
        
    </div>
    )
}