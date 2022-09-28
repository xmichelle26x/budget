import React from 'react'

const ControlBudget = ({ budget }) => {

    const budgetFormatting = (quantity) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(quantity);
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            Gráfica
            <div className='contenido-presupuesto'>
                <button className='reset-app '>Reset app</button>
                <p>
                    <span>Budget: </span>{budgetFormatting(budget)}
                </p>
                <p>
                    <span>Available: </span>{budgetFormatting(0)}
                </p>
                <p>
                    <span>Spent: </span>{budgetFormatting(0)}
                </p>

            </div>
        </div>
    )
}

export default ControlBudget