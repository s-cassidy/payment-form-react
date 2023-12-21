import { CardNo } from './components/CardNo'
import { CardType } from './components/CardType'
import { CardName } from './components/NameCard'

function App() {

  return (
    <>
      <h1 className="text-cyan-300 font-extrabold">Pay now. Regret later</h1>
      <form className='flex flex-col w-1/3'>
        <CardType />
        <CardNo />
        <CardName />
      </form>
    </>
  )
}

export default App
