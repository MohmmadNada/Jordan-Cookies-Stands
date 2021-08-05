import Head2 from "./Head2"
import Header from "./Header"
import Footer from "./Footer"
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"
import openHours from "../data" 
export default function CookiesSandAdmin(props){

return(
    <div className = "">
        <Head2/>
        <body className="">
            <Header herfOverview={'/'}/>
            <main className = "grid flex-grow h-screen p-10 bg-gray-500 justify-items-center">
                <CreateForm cookiesFormHandler={props.cookiesFormHandler} />
                <ReportTable locationMarket={props.locationMarket} />
            </main>
            <Footer totalMarkets={props.locationMarket.length}/>
        </body>
    </div>
    )
}