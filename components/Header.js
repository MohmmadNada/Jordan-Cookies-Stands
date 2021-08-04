export default function Header(props){
        return(
                <header className = "relative inset-x-0 top-0 flex justify-between p-2 text-2xl bg-blue-500 h-1/5">
                        <h1>Cookies Stand Admin</h1>
                        <button className='px-3 text-base bg-blue-300 rounded-lg '><a href="{herfOverview}">Overview</a></button>
                </header>
                );
        }