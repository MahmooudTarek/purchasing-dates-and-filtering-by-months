import React, { useState } from 'react';
import "./expenseForm.css"

function ExpenseForm (props){

    const [enteredTitle,setEnteredTitle]=useState("")
    const [enteredAmount,setEnterdAmount]=useState("")
    const [enteredDate,setEnteredDate] =useState("")
    const titleChangeHandler = (event)=>{
        console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        console.log(event.target.value)

        setEnterdAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const data={
            title:enteredTitle,
            amount:enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(data)

props.onsaveddata(data)
setEnteredTitle("")
setEnterdAmount("")
setEnteredDate("")

    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text"/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount}onChange={amountChangeHandler}  type="number" min="0.01" step="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>ADD EXPENSE</button>
                <button type="button" onClick={props.oncancel}>Cancel</button>
            </div>
        </form>
    )
}
export default ExpenseForm
