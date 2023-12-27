import { PaymentForm } from "./components/PaymentForm"

function App() {

  return (
    <>
      <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className="text-cyan-300 font-extrabold">Pay now. Regret later</h1>
          <PaymentForm />
        </div>
      </div>
    </>
  )
}

export default App
