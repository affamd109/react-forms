import { useState } from "react"

export default function ShoppingForm(){
    const [formData , setFormData] = useState({product : "" , quantity : ""})

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

    return (
        <form >
            <label htmlFor="product"></label>
            <input className="m-2" type="text" placeholder="Product name" id="product" name="product"
             value={formData.product} onChange={handleChange} />
             
             <label htmlFor="quantity"></label>
             <input className="m-2 " type="text" name="quantity" id="quantity" value={formData.quantity} 
             onChange={handleChange} placeholder="Quantity" />

             <button>Submit</button>


        </form>
    )
}