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
                <p>
                    <span>Budget: </span>{budgetFormatting(budget)}
                </p>

            </div>
        </div>
    )
}

export default ControlBudget