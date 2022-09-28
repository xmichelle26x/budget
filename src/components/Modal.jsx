import { useState } from 'react'
import CloseBttn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
    
    const [ name, setName ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ category, setCategory ] = useState('') 

    const [ message, setMessage ] = useState('')
    
    const hideModal = () => {
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }
 
    const handleSubmit = e => {
        e.preventDefaul(); 

        if([name, amount, category].includes('')){
            setMessage('Please fill all the required fields')
            return;
        }
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CloseBttn}
                    alt="close modal"
                    onClick={hideModal} />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
                >
                <legend>New Expense</legend>

                {message && <Message typee='error'>{message}</Message>}

                <div className='campo'>
                    <label htmlFor="nombre">Expense name</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Add expense'
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Amount</label>
                    <input
                        id='nombre'
                        type="number"
                        placeholder='Add expense amount: i.e. : 300'
                        value={amount}
                        onChange={e=> setAmount(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Category</label>
                    <select 
                        id="categoria"
                        value={category}
                        onChange={e=> setCategory(e.target.value)}
                        >

                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="housing">Housing</option>
                        <option value="expenses">Various Expenses</option>
                        <option value="leisure">Leisure Expenses</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value='Add Expense' />
                        
                </div>
            </form>

        </div>
    )
}

export default Modal