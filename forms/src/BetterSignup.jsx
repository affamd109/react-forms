import { useState } from "react"

export default function BetterSignup(){
    const [formData , setFormData] = useState({firstName : "" , lastName : "" , password : ""});

    const handleChange = (evt) =>{
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        console.log(evt.target.name ,evt.target.value );



        // setFormData((currData) =>{

        //     currData[changedField] = newValue;
        //     return {...currData};
        // })

        //u can also write this :

        setFormData((currData) =>{
            return {
                ...currData ,
                [changedField] : newValue

            }
        })


    }


    return (
        <div className="flex" >
            <label htmlFor="firstName" >Enter firstname :</label>
            <input id="firstName" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="text" placeholder="First name" value={formData.firstName || ""} onChange={handleChange} name="firstName" />

            <label htmlFor="lastName" >Enter lastname :</label>
            <input id="lastName" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="text" placeholder="Last name" value={formData.lastName || ""} onChange={handleChange} name="lastName" />

            <label htmlFor="password" >Enter lastname :</label>
            <input id="password" className="border-2 border-gray-400 p-1 m-1 rounded-md" type="password" placeholder="Last name" value={formData.password || ""} onChange={handleChange} name="password" />


            <button className="border-2 border-gray-400 p-1 rounded-md hover:opacity-70 cursor-pointer" >Submit</button>
        </div>
    )
}