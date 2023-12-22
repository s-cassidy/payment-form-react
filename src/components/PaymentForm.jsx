import { CCVInput } from './components/CCVInput'
import { CardNumberInput } from './components/CardNumberInput'
import { CardTypeSelect } from './components/CardTypeSelect'
import { ExpDateSelect } from './components/ExpDateSelect'
import { CardNameInput } from './components/CardNameInput'
import { SubmitButton } from './components/SubmitButton'

export function PaymentForm() {
  <form className='flex flex-col w-4/5'>
    <CardTypeSelect />
    <CardNameInput />
    <CardNumberInput />
    <div className='flex items-center justify-between'>
      <ExpDateSelect />
      <CCVInput />
      <SubmitButton />
    </div>
  </form>
}
