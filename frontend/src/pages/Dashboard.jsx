import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export function Dashboard(){
    return <div className="p-10 bg-sky-300">
        <div className="flex flex-col justify-center p-10 rounded h-full bg-sky-600">
            <AppBar/>
            <Balance></Balance>
            <Users></Users>   
        </div>
    </div>
}