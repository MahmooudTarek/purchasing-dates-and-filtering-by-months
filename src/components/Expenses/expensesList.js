import React from 'react';
import ExpenseItem from './ExpenseItem';
import Expensess from './Expensess';

const ExpensesList = (props) => {
    console.log(props)   
if(props.items.length===0){
    return  <h1>NO EXPENSES FOUND!</h1>
}
    return (
        <ul>
            { props.items.map((expense) =>(
             <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                
    ))}
           
        </ul>
    )
}
export default ExpensesList