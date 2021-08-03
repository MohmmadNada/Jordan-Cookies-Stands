import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
    // add useState as array , first is save place , second fun to set 
    const [locationMarket,setLocationMarket]=useState([]) // between ()is defult value
    function cookiesFormHandler(event){
        event.preventDefault(); // prevent refresh
        const newLocations={ // new location 
            locationInput : event.target.location.value,
            minCustomersInput : event.target.minCustomers.value,
            maxCustomersInput:event.target.maxCustomers.value,
            avgCustomersInput:event.target.avgCustomers.value,
        } // add it to all location
        setLocationMarket([...locationMarket,newLocations])//get new location data and set add it to collection

    }
    
    // let dictionary = {};//create new object
    // dictionary["key1"] = 'value1';//set key1
    // var key1 = dictionary["key1"];//get key1
    return (
    <div className = "">
        <Head>
            <title>Cookie-stand-admin</title>
        </Head>
        <body className="" >
            <header className = "relative inset-x-0 top-0 p-2 text-2xl bg-blue-500 h-1/5">
                <h1>Cookies Stand Admin</h1>
            </header>
            <main className = "grid h-screen p-10 bg-gray-500 justify-items-center">
                <form className='grid w-4/5 grid-flow-col grid-cols-4 grid-rows-4 gap-4 p-3 bg-blue-300 rounded-lg h-3/5' onSubmit={cookiesFormHandler}>
                   <label className='col-span-4 col-start-1 text-xl text-center '>
                       Create Cookie Stand
                   </label>
                   <label className='col-span-1 col-start-1 text-center' for='location'>
                       Location
                   </label>
                   <input className='col-span-3 col-start-2 px-2 bg-blue-200 rounded-lg' id="location" name="location"/>
                   <label className="col-span-1 col-start-1 text-center">Minimum Customers per Hour</label>
                   <input className="px-2 rounded-lg" name="minCustomers"></input>
                   <label className="col-span-1 col-start-2 text-center">Maximum Customers per Hour</label>
                   <input className="px-2 rounded-lg" name="maxCustomers"></input>
                   <label className="col-span-1 col-start-3 text-center">Avarage Customers per Sale</label>
                   <input className="px-2 rounded-lg" name="avgCustomers"></input>
                   <button className="col-span-1 col-start-4 row-span-2 bg-blue-400 rounded-lg">Create</button>
                </form>
                        <p className='w-4/5 grid-flow-col p-2 text-center bg-blue-300 rounded-lg h-3/5' >
                        Report table coming soon <br></br>
                        {
                            locationMarket.map(item => {
                                return(
                                    JSON.stringify(item)
                                )
                            })
                            }
                        </p>

                
            </main>
            <footer className = "relative inset-x-0 bottom-0 p-2 text-lg bg-blue-500 h-1/5 ">
                <h5>
                &copy;2021
                </h5>
            </footer> 
        </body>
        
    </div>
    )
}