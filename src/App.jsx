import { useState } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList';
import Modal from './components/Modal';
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0);

  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const datee = Date.now().toString(36)
    return random + datee
  }


  const saveExpense = expense => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
    // console.log(expenses)
  }



  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconNewExpense}
              alt="New expense Icon"
              onClick={handleNewExpense}
            />
          </div>
        </>

      )}


      {modal &&
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />}

    </div>
  )
}

export default App
