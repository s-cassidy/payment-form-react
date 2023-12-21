import { useState } from 'react'


export function ExpDate() {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  return (
    <>

      <fieldset className='border-2 border-solid rounded border-cyan-300'>
        <legend className='font-bold text-gray-200 pl-1 pr-1'>Expiry date</legend>
        <div className='flex'>
          <span className='flex flex-col m-2 mt-0.5'>
            <label className='text-gray-200 font-bold' htmlFor='exp-month'>Month</label>
            <select
              name="exp-month"
              id="exp-month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className='border-cyan-300 border-solid border-2 rounded mr-auto'
            >
              {
                [...Array(12).keys()].map(
                  k => <option key={k} value={k + 1}>
                    {("0" + (k + 1)).slice(-2)}
                  </option>)
              }
            </select>
          </span>
          <span className='flex flex-col m-2 mt-0.5'>

            <label className='text-gray-200 font-bold' htmlFor='exp-year'>Year</label>
            <select
              name="exp-year"
              id="exp-year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='border-cyan-300 border-solid border-2 rounded mr-auto'
            >
              {
                [...Array(12).keys()].map(
                  k => <option key={k} value={k + 23}>
                    {k + 23}
                  </option>)
              }
            </select>
          </span>
        </div>
      </fieldset>
    </>

  )
}
