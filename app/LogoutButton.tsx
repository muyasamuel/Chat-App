'use client'

function LogoutButton() {
  return (
    <button onClick={() => console.log('hello')} className="bg-blue-500 hover:bg-blue-700 text-white  px-7 py-2 rounded-md" > Log Out</button>
  )
}

export default LogoutButton;