import { useState } from "react"

export default function UsernameForm(){
    const [username , setUsername] = useState("");

    const updateUsername = (e) => {
        console.log("Changed")

        setUsername(e.target.value)
    }

    return (
        <div>
            <label htmlFor="username" >Enter a username</label>
            <input id="username" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="text" placeholder="Username" value={username} onChange={updateUsername} />
            <button className="border-2 border-gray-400 p-1 rounded-md hover:opacity-70 cursor-pointer" >Submit</button>
        </div>
    )
}