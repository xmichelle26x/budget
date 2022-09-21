import CloseBttn from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal }) => {


    const hideModal = () => {
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CloseBttn}
                    alt="close modal"
                    onClick={hideModal} />
            </div>
            <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                <legend>New Expense</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Expense name</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Add expense'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="nombre">Amount</label>
                    <input
                        id='nombre'
                        type="number"
                        placeholder='Add expense amount: i.e. : 300'
                    />
                </div>
            </form>

        </div>
    )
}

export default Modal