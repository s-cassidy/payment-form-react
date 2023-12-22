import { useState } from 'react'


export function CardNumberInput() {
  const [cardNumber, setCardNumber] = useState("");


  const handleInput = (cardNumberInput) => {
    const cleanedNumber = cleanCardNumber(cardNumberInput);
    const formattedNumber = addSpaces(cleanedNumber);
    setCardNumber(formattedNumber);
  }

  return (
    <>
      <label className='text-gray-200 font-bold' htmlFor='cardNumber'>Card Number
      </label>
      <input
        name="cardNumber"
        value={cardNumber}
        id="cardNumber"
        type="tel"
        placeholder="XXXX XXXX XXXX XXXX"
        onChange={e => handleInput(e.target.value)}
        className='border-cyan-300 border-solid border-2 rounded'
      >
      </input>
    </>
  )
}

function cleanCardNumber(cardNumber) {
  const cardNumberClean = cardNumber.split('')
    .filter((c) => c >= '0' && c <= '9')
    .join('')
    .slice(0, 16);
  return cardNumberClean
}


function addSpaces(cardNumber) {
  let formattedCardNumber = "";
  let digit;
  for (let i = 0; i < cardNumber.length; i++) {
    digit = cardNumber[i]
    formattedCardNumber += (i > 0 && i % 4 === 0) ? " " + digit : digit;
  }
  return formattedCardNumber
}

