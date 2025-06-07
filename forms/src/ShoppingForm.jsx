import { useState } from "react"
import {v4 as uuid} from "uuid";

export default function ShoppingForm({addItem}){
    const [formData , setFormData] = useState({product : "" , quantity : ""})
    //Here formData = {product : "" , quantity : ""}

    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newVal = evt.target.value;

        setFormData((currProd) =>{
            return {
                ...currProd , 
                [changeField] : newVal
            }
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted");
        addItem(formData);
        setFormData({product : "" , quantity : ""});

    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="product"> Product name: </label>
            <input className="m-2" type="text" placeholder="Product name" id="product" name="product"
             value={formData.product} onChange={handleChange} />
             
             <label htmlFor="quantity"> Quantity : </label>
             <input className="m-2 " type="text" name="quantity" id="quantity" value={formData.quantity} 
             onChange={handleChange} placeholder="Quantity" />

             <button>Submit</button>


        </form>
    )
}