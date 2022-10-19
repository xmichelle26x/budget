import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({
    expenses,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget }) => {
    return (
        <header>
            <h1>Spending Planner</h1>

            {isValidBudget ? (
                <ControlBudget
                    expenses={expenses}
                    budget={budget}
                />

            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}

        </header>
    )
}

export default Header