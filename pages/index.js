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
        // createTable()
    }
    function resultTable(){
        if (locationMarket.length == 0 ){
            return(
                <p>No Cookies Stands Available</p>
            );
        }
        else{
            return  createTable()
        }
    }
    function hourlyTotalCal(){
        let totalAllHours=0;
        let hourlyTotal=[]
        for (let i=0;i<openHours.length;i++){
            let sumHour=0;
            locationMarket.map(element=>{
                sumHour+=element.hourlyCustomers[i]
            })
            hourlyTotal[i]=sumHour
        }
        totalAllHours=hourlyTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
        hourlyTotal[openHours.length]=totalAllHours
        return(hourlyTotal)
    }
    function createTable(){
        return (
            <table className='border-2 border-black'>
                <thead>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>
                            Location
                        </td>
                        {/* flixable opening hours */}
                        {openHours.map(oneHour=>{
                            return(
                                <td className='border-2 border-black'>
                                    {oneHour}
                                </td>
                            );
                        })}
                        
                        <td className='border-2 border-black'>
                            Totals
                        </td>
                    </tr>
                </thead>
                <tbody>
                {locationMarket.map(oneMarket=>{
                            return(
                                <tr className='border-2 border-black'>
                                    <td>
                                        {oneMarket.locationInput}
                                    </td>
                                    {
                                        oneMarket.hourlyCustomers.map(hourCus=>{
                                            return(
                                                <td className='border-2 border-black'>
                                                    {hourCus}
                                                </td>
                                            );
                                        })
                                    }
                                    <td>
                                        {
                                            oneMarket.hourlyCustomers.reduce((accumulator, currentValue) => accumulator + currentValue)
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
                <tfoot>
                    <tr className='border-2 border-black'>
                    <td className='border-2 border-black'>
                        Totals
                    </td>
                    {hourlyTotalCal().map(element=>{
                        return(
                        <td className='border-2 border-black'>
                            {element}
                        </td>

                        )
                    }
                    )
                    }
                    </tr>
                </tfoot>
                
            </table>

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
                        <div className='w-4/5 grid-flow-col p-2 text-center bg-blue-400 rounded-lg h-3/5' >
                            {resultTable()}
                            
                        </div>
            </main>
            <Footer totalMarkets={locationMarket.length}/>
        </body>
        
    </div>
    )
}