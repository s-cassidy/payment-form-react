export function SubmitButton() {

  return (
    <>
      <button type="submit"
        onMouseOver={e =>
          e.target.classList.add("bg-cyan-400")
        }
        onMouseLeave={e =>
          e.target.classList.remove("bg-cyan-400")
        }
        className="bg-cyan-700 text-green-50 w-20 h-8 rounded font-bold mt-6">Pay!</button>
    </>
  )
}
