import { CCVInput } from './CCVInput'
import { CardNumberInput } from './CardNumberInput'
import { CardTypeSelect } from './CardTypeSelect'
import { ExpDateSelect } from './ExpDateSelect'
import { CardNameInput } from './CardNameInput'
import { SubmitButton } from './SubmitButton'

export function PaymentForm() {
  return (
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
  )
}
