import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatDate } from './helpers'

import SavingIcon from '../img/icono_ahorro.svg'
import FoodIcon from '../img/icono_comida.svg'
import HousingIcon from '../img/icono_casa.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SuscriptionIcon from '../img/icono_suscripciones.svg'

const iconDictionary = {
    savings: SavingIcon,
    food: FoodIcon,
    housing: HousingIcon,
    expenses: ExpensesIcon,
    leisure: LeisureIcon,
    health: HealthIcon,
    subscriptions: SuscriptionIcon
}

const Expense = ({ expense }) => {

    const { category, name, amount, id, date } = expense;

    const leadingActions = () => ( 
        <LeadingActions>
            <SwipeAction onClick={() => console.log("Edit")}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => ( 
        <TrailingActions>
            <SwipeAction onClick={() => console.log("Delete")}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img
                            src={iconDictionary[category]}
                            alt="category icon" />

                        <div className='descripcion-gasto'>
                            <p className='categoria'>
                                {category}
                            </p>
                            <p className='nombre-gasto'>
                                {name}
                            </p>
                            <p className='fecha-gasto'>
                                Added on: {''}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>
                        ${amount}
                    </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense