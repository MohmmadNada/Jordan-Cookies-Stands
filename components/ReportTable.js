import openHours from "../data";
export default function ReportTable(props){
    props.postDataAPI();
    function hourlyTotalCal(){
        let totalAllHours=0;
        let hourlyTotal=[]
        for (let i=0;i<openHours.length;i++){
            let sumHour=0;
            props.cookiesDataHook.map(element=>{
                sumHour+=element.hourly_sales[i]
            })
            hourlyTotal[i]=sumHour
        }
        totalAllHours=hourlyTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
        hourlyTotal[openHours.length]=totalAllHours;
        return(hourlyTotal)
    }
    function createTable(){
        return ( 
            <table className='col-span-2 col-start-3 m-2 bg-blue-300 rounded-lg'>	
                <thead>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>
                            Location
                        </td>
                        {/* flixable opening hours */}
                        {openHours.map(oneHour=>{
                            return(
                                <td className='border-2 border-black '>
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
                {props.cookiesDataHook.map(oneMarket=>{
                    return(
                        <tr className='border-2 border-black'>
                                    <td >
                                        {oneMarket.location}
                                    </td>
                                    {
                                        oneMarket.hourly_sales.map(hourCus=>{
                                            return(
                                                <td className='font-normal border-2 border-black'>
                                                    {hourCus}
                                                </td>
                                            );
                                        })
                                    }
                                    <td>
                                        {
                                            oneMarket.hourly_sales.reduce((accumulator, currentValue) => accumulator + currentValue)
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
)})}
                    </tr>
                </tfoot>
                
            </table>
      
        );
    }
    function resultTable(){
        if (props.cookiesDataHook.length == 0 ){
            return(
                <p>No Cookies Stands Available</p>
            );
        }
        else{
            return  createTable()
        }
    }
    return(
        // <div className='grid flex-grow w-4/5 grid-flow-col p-2 text-center bg-blue-400 rounded-lg h-3/5' >
        //     {resultTable()}
        // </div>
        resultTable()
    )
}