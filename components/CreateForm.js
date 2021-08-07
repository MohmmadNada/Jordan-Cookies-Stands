export default function CreateForm(props){ // prpos.locationMarket
    return(
        <form className='grid flex-grow grid-flow-col grid-cols-6 col-span-6 grid-rows-6 gap-4 p-3 m-6 bg-blue-300 rounded-lg' onSubmit={props.cookiesFormHandler}>
            <label className='col-span-4 col-start-1 text-xl text-center '>
                Add location
            </label>
            <button className="col-span-2 col-start-5 row-span-2 row-start-2 bg-blue-400 rounded-lg">Create</button>
            <input className='col-span-4 col-start-1 row-start-3 px-2 bg-blue-200 rounded-lg' placeholder='Cookies Stand location'id="location" name="location" required/>
            <label className="col-span-2 col-start-1 row-start-4 text-center">Minimum Customers per Hour</label>
            <label className="col-span-2 col-start-3 row-span-2 row-start-4 text-center" >Maximum Customers per Hour</label>
            <label className="col-span-2 col-start-5 row-start-4 text-center">Avarage Customers per Sale</label>
            <input className="col-span-2 col-start-1 row-start-5 px-2 rounded-lg" name="minCustomers" required></input>
            <input className="col-span-2 col-start-3 row-start-5 px-2 rounded-lg" name="maxCustomers" required></input>
            <input className="col-span-2 col-start-5 row-start-5 rounded-lg x-2" name="avgCustomers" required></input>
     </form>
    );
}