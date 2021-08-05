export default function CookieStandHeader(props){
        return(
                <header className = "relative inset-x-0 top-0 flex justify-between p-2 text-2xl bg-blue-500 h-1/5">
                        
                        <h1>Cookies Stand Admin</h1>
                        <dev className="items-center pb-2 font-normal ">
                        <button className='px-3 mx-1 text-base bg-blue-300 rounded-lg '><a href="{herfOverview}">Overview</a></button>
                        <button className='px-3 mx-1 text-base bg-blue-400 rounded-lg '><a href="/signout">Sign Out</a></button>
                        <button className='px-3 mx-1 text-base bg-blue-300 rounded-lg '><a href="/signout">Rudy</a></button>
                        </dev>
                </header>
                );
        }