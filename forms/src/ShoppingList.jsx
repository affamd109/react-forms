import { useState } from "react"
import ShoppingForm from "./ShoppingForm";
import {v4 as uuid} from "uuid";


export default function ShoppingList(){
    const [items , setItems] = useState([{id : uuid() , product : "Banana" , quantity : 8} ,
        {id : uuid(), product : "Apples" , quantity : 12}
     ]);

     const addItem = (item) =>{

        setItems((currItems) =>{
            return [...currItems , {id : uuid() , ...item} ];
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