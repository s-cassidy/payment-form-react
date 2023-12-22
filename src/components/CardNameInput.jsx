import { useState } from 'react'


export function CardNameInput() {
  const [cardName, setCardName] = useState("");


  return (
    <>
      <label className='text-gray-200 font-bold' htmlFor='cardName'>Name on card
      </label>
      <input
        name="cardName"
        value={cardName}
        id="cardName"
        type="text"
        placeholder="MR J JONES"
        onChange={e => setCardName(e.target.value)}
        className='border-cyan-300 border-solid border-2 rounded'
      >
      </input>
    </>
  )
}
