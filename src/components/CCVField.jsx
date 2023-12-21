import { useState } from 'react'


export function CCVNo() {
  const [CCVNo, setCCVNo] = useState("");

  function cleanCCV(CCV) {
    CCV = CCV.split('').filter((c) => c >= '0' && c <= '9').join('');
    if (CCV.length > 3) {
      CCV = CCV.slice(0, 3);
    }
    return CCV
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
          onChange={e => setCCVNo(cleanCCV(e.target.value))}
          className='border-cyan-300 border-solid border-2 rounded'
        >
        </input>
      </div>
    </>
  )
}
