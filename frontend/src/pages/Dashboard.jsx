import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export function Dashboard(){
    return <div className="shadow p-10 mb-20 bg-slate-100">
        <div className="flex flex-col justify-center p-10 rounded h-full ">
            <AppBar/>
            <Balance></Balance>
            <Users></Users>   
        </div>
    </div>
}