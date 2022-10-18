import React from 'react'
import Expense from './Expense'

const ExpensesList = ({ expenses }) => {
    return (
        <div className='Listado-gastos contenedor'>
            <h2>{expenses.length ? 'Expenses' : 'No expenses'}</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    )
}

export default ExpensesList