import { CCVNo } from './components/CCVField'
import { CardNo } from './components/CardNo'
import { CardType } from './components/CardType'
import { ExpDate } from './components/ExpDate'
import { CardName } from './components/NameCard'
import { SubmitButton } from './components/Submit'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className="text-cyan-300 font-extrabold">Pay now. Regret later</h1>
          <form className='flex flex-col w-4/5'>
            <CardType />
            <CardName />
            <CardNo />
            <div className='flex items-center justify-between'>
              <ExpDate />
              <CCVNo />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
