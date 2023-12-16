import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";


const Note = ({item,index,getData}) => {

  const deleteItem = async () => {
    try {
      const response = await fetch(`https://firenote-a9c70-default-rtdb.firebaseio.com/noteapp/${item.id}.json`, {
        method : "DELETE"
      })
      if (!response.ok) {
        throw new Error ("Enabled to delete item.")
      } 
      getData();
    } catch (err) {
      alert(err.message);
    }

  }

  return (
    <div className='app-con item-con '>
        <h3>{index + 1}. {item.note}</h3>
        <IoMdRemoveCircleOutline className='minus' onClick={deleteItem} />
    </div>  
  )
}

export default Note