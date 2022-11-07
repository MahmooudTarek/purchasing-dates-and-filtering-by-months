import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './expensesFilter/ExpensesFilter';
import ExpensesList from './expensesList';
import "./Expensess.css"
function Expensess(props) {
    // console.log(props.expenses)
    const [filterdYear, setFilterdYear] = useState("2021")
    const filterHandler = (selectedYear) => {
        console.log("hello from expenses parent");
        console.log(selectedYear)
        setFilterdYear(selectedYear)


    }
    const filtrerdArray = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterdYear
    })
   
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterdYear} onFilterExpense={filterHandler} />
                <ExpenseChart expenses = {filtrerdArray } />
                <ExpensesList items={filtrerdArray}/>


            </Card>
        </div>
    );
}

export default Expensess;