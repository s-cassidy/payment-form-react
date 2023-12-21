import { useState } from 'react'

function App() {
  const [cardNo, setCardNo] = useState("");

  function addSpaces(cardNumber) {
    const prettyNumberArray = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        prettyNumberArray.push(' ');
      }
      prettyNumberArray.push(cardNumber[i]);
    }
    return prettyNumberArray.join('')
  }


  function cleanCardNo(cardNumber) {
    cardNumber = cardNumber.split('').filter((c) => c >= '0' && c <= '9').join('');
    if (cardNumber.length > 16) {
      cardNumber = cardNumber.slice(0, 16);
    }
    return cardNumber
  }

  return (
    <>
      <h1 className="text-cyan-300 font-extrabold">Pay now. Regret later</h1>
      <form>
        <label htmlFor='cardNo'>Card Number
        </label>
        <input
          name="cardNo"
          value={addSpaces(cardNo)}
          id="cardNo"
          type="tel"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={e => setCardNo(cleanCardNo(e.target.value))}
        >
        </input>
      </form>
    </>
  )
}

export default App
