import openHours from "../data";
export default function ReportTable(prpos){
    function hourlyTotalCal(){
        let totalAllHours=0;
        let hourlyTotal=[]
        for (let i=0;i<openHours.length;i++){
            let sumHour=0;
            prpos.locationMarket.map(element=>{
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
            <table className='flex-grow border-2 border-black '>
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
                {prpos.locationMarket.map(oneMarket=>{
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
    function resultTable(){
        if (prpos.locationMarket.length == 0 ){
            return(
                <p>No Cookies Stands Available</p>
            );
        }
        else{
            return  createTable()
        }
    }
    return(
        <div className='grid flex-grow w-4/5 grid-flow-col p-2 text-center bg-blue-400 rounded-lg h-3/5' >
            {resultTable()}
        </div>
    )
}