import { useState } from "react";

export function Form({handleAddItems}){
    const [quantity,setquantity] = useState(1);
    const [description,setdescription] = useState("");
  
    function handleform(e){
      e.preventDefault();
      const newItem = {description,quantity,packed : false,id: Date.now()}
      handleAddItems(newItem);
      setquantity(1);
      setdescription("");
  
    }
    return(
    <form className="add-form" onSubmit={handleform}>
      <h3>What do you need for your trip😍?</h3>
      <select value={quantity} onChange={(e)=> setquantity(e.target.value)}>
        {Array.from({length:20},(_,i)=>i+1).map(
          (num)=>(<option value={num} key={num} >{num}</option>)
        )}
      </select>
      <input 
      type="text" 
      placeholder="Item..." 
      value={description} 
      onChange={(e)=>setdescription(e.target.value)} 
      />
      <button>ADD</button>
    </form>);
  
  }
  