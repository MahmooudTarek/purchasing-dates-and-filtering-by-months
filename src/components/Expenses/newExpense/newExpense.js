import React, { useState } from 'react';
import ExpenseForm from "./expenseForm"
import "./newExpense.css"
function NewExpense(props){
    const [editing,setEditing]= useState(false)
const formdata = (data)=>{
    console.log("newexpense")
    console.log("data arrived")
    const x = {...data,id:Math.random()}
    console.log(x)

props.onAddExpense(data)
setEditing(false)
}
const editingHandler=()=>{
    setEditing(true)
}
const cancelEditing=()=>{
    setEditing(false)
}

    return(
        <div className='new-expense'>
           {!editing &&<button onClick={editingHandler}> ADD NEW EXPENSE</button>} 
            {editing && <ExpenseForm onsaveddata={formdata} oncancel={cancelEditing}/>}
        </div>
    )
}
export default NewExpense