import { useState } from 'react'


export function CardType() {
  const [cardType, setCardType] = useState('')

  return (
    <>
      <label className='text-gray-200 font-bold' htmlFor='cardName'>Card type</label>
      <select
        name="cardType"
        id="cardType"
        type=''
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        className='border-cyan-300 border-solid border-2 rounded'
      >
        <option value='visa'>Visa</option>
        <option value='american-express'>American Express</option>
        <option value='mastercard'>MasterCard</option>
      </select>
    </>

  )
}
