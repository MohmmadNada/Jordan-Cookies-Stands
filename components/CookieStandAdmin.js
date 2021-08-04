
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"
export default function CookiesSandAdmin(props){

return(
    <main className = "grid flex-grow h-screen p-10 bg-gray-500 justify-items-center">
                <CookiesSandAdmin cookiesFormHandler={props.cookiesFormHandler} />
                <ReportTable locationMarket={props.locationMarket} openHours={props.openHours}/>
    </main>
    )
}