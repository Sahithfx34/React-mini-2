import { useState } from "react";

export function PackingList({item,handledelete,handleCheckBox,handleClick}){
    const [sortBy,setSort] = useState("input");
    let sorted;
    if(sortBy === "input")
        sorted = item
    if(sortBy === "description")
        sorted = item.slice().sort((a,b)=> a.description.localeCompare(b.description));
    if(sortBy === "packed") 
        sorted = item.slice().sort((a,b)=> a.packed - b.packed);
    return(
      <div className="list">
        <li>{sorted.map(item=>
          <Items 
          item = {item} 
          key={item.id}
          deleting = {handledelete} 
          handleCheckBox={handleCheckBox}
          />)}
        </li>
        <div className="actions">
          <select value= {sortBy} onChange={(e)=>setSort(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleClick}>Clear list</button>
        </div>
  
      </div>
    )
  }

  function Items({item,deleting,handleCheckBox}){
    return(
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>handleCheckBox(item.id)}/>
        <span style={item.packed ? {textDecorationLine:"line-through"}:{}}>{item.quantity} {item.description}</span>
        <button onClick={()=>deleting(item.id)}>❌</button>
      </li>
    );
  }