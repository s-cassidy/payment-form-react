import { useState } from 'react'


export function CCVInput() {
  const [CCVNo, setCCVNo] = useState("");

  const handleInput = (CCVInput) => {
    const cleanedCCV = cleanCCV(CCVInput);
    setCCVNo(cleanedCCV);
  }

  return (
    <>
      <div className='flex flex-col max-w-9'>

        <label className='text-gray-200 font-bold' htmlFor='CCVNo'>CCV
        </label>
        <input
          name="CCVNo"
          value={CCVNo}
          id="CCVNo"
          type="password"
          placeholder="123"
          onChange={e => handleInput(e.target.value)}
          className='border-cyan-300 border-solid border-2 rounded'
        >
        </input>
      </div>
    </>
  )
}

function cleanCCV(CCV) {
  CCV = CCV.split('')
    .filter((c) => c >= '0' && c <= '9')
    .join('')
    .slice(0, 3)
  return CCV
}
