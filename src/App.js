import { useState } from "react";
import {Logo} from "./Logo";
import {Form} from "./Form";
import { PackingList } from "./Packedlist";
import { Stats } from "./Stats";

export default function App(){
  const [item,setItem] = useState([]);
  function handleAddItems(item){
    setItem((items)=>[...items,item]);
  }
  function handledelete(id){
    setItem((items)=> items.filter((item)=>item.id !== id));
  }
  function handleCheckBox(id){
    setItem((items)=> items.map((item)=> item.id === id ? { ...item, packed: !item.packed}: item))
  }
  function handleClick(){
    const confirm = window.confirm("Are you sure you want to delete all items")
    if(confirm) setItem([]);
  }
  return(
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList item = {item} handledelete={handledelete} handleCheckBox={handleCheckBox} handleClick={handleClick}/>
      <Stats item = {item}/>
    </div>
  );
}




