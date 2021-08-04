export default function(props){
    return(
        <footer className = "relative inset-x-0 bottom-0 flex justify-between px-5 py-2 text-lg bg-blue-500 h-1/5 ">
                <h5> {props.totalMarkets} Locations World Wide</h5> 
                <h5>
                &copy;2021
                </h5>
        </footer> 
    );
}