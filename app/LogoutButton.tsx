'use client'

import { signOut } from "next-auth/react";


function LogoutButton() {
  return (
    <button  onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white  px-7 py-2 rounded-md" > Sign Out</button>
  )
}

export default LogoutButton;