export default function CreateForm(props){
    return(
        <form className='grid w-4/5 grid-flow-col grid-cols-4 grid-rows-4 gap-4 p-3 bg-blue-300 rounded-lg h-3/5' onSubmit={props.cookiesFormHandler}>
            <label className='col-span-4 col-start-1 text-xl text-center '>
                Create Cookie Stand
            </label>
            <label className='col-span-1 col-start-1 text-center' for='location'>
                Location
            </label>
            <input className='col-span-3 col-start-2 px-2 bg-blue-200 rounded-lg' id="location" name="location" required/>
            <label className="col-span-1 col-start-1 text-center">Minimum Customers per Hour</label>
            <input className="px-2 rounded-lg" name="minCustomers" required></input>
            <label className="col-span-1 col-start-2 text-center" >Maximum Customers per Hour</label>
            <input className="px-2 rounded-lg" name="maxCustomers" required></input>
            <label className="col-span-1 col-start-3 text-center">Avarage Customers per Sale</label>
            <input className="px-2 rounded-lg" name="avgCustomers" required></input>
            <button className="col-span-1 col-start-4 row-span-2 bg-blue-400 rounded-lg">Create</button>
     </form>
    );
}