import { useState } from "react"
import ShoppingForm from "./ShoppingForm";

export default function ShoppingList(){
    const [items , setItems] = useState([{id : 1 , product : "Banana" , quantity : 8} ,
        {id : 2, product : "Apples" , quantity : 12}
     ]);

     const addItem = (item) =>{

        setItems((currItems) =>{
            return [...currItems , {id : 9 , ...item} ];
        })

     }

    return (
        <div>
            <h1 className="text-3xl mb-4" >Hello there !!</h1>

            <ul>
                {
                    items.map((i) =>(
                        <li key={i.id} >{i.product} - {i.quantity} </li>
                    ))
                }
            </ul>

            <div className="mt-5" >
                <h1 className="text-3xl" >Add your new items : </h1>

                <ShoppingForm addItem={addItem} />
            </div>

            



        </div>

    )
}