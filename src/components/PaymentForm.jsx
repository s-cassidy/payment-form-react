import { CCVNo } from './components/CCVField'
import { CardNo } from './components/CardNo'
import { CardType } from './components/CardType'
import { ExpDate } from './components/ExpDate'
import { CardName } from './components/NameCard'
import { SubmitButton } from './components/Submit'

export function PaymentForm() {
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
}
