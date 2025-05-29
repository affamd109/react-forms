import { useState } from "react"

export default function SignupForm(){
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");

    const updateFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const updateLastname = (e) => {
        setLastname(e.target.value)
    }


    return (
        <div className="flex" >
            <label htmlFor="firstname" >Enter firstname :</label>
            <input id="firstname" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="text" placeholder="First name" value={firstname} onChange={updateFirstname} />

            <label htmlFor="lastname" >Enter lastname :</label>
            <input id="firstname" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="text" placeholder="First name" value={lastname} onChange={updateLastname} />


            <button className="border-2 border-gray-400 p-1 rounded-md hover:opacity-70 cursor-pointer" >Submit</button>
        </div>
    )
}