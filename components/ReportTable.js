export default function ReportTable(props){
    return(
        <p className='w-4/5 grid-flow-col p-2 text-center bg-blue-300 rounded-lg h-3/5' >
        <p className='text-xl'>
        <table className='border border-blue-600'>
            <tr>
                <th>Location</th>
                {/* dynamic data */}
                <th>Totals</th>
            </tr>
        </table>
            {props.resultTable()}
        </p>
        </p>
    );
}