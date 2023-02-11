import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth";


async function Header() {

    const session = await unstable_getServerSession();

    if(session) return (
        <header className=" h-20 bg-white sticky top-0 z-50  px-6 pb-2 shadow-md flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <Image
                    className="rounded-full object-contain   "
                    src={session.user?.image!}
                    width={50}
                    height={50}
                    alt="profile pic" />
                
                
            
            <div>
                <p className="text-blue-500">logged in as:</p>
                <p className="font-bold text-black">{session.user?.name}</p>
            </div>
          </div>

          <LogoutButton />
          
        
        
        </header>

    )
  return (
    <header className=" bg-white sticky top-0 z-50  pb-2 shadow-md flex items-center justify-center">
        <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 ">
            <div >
               <Image
                src='https://t4.ftcdn.net/jpg/03/05/15/39/240_F_305153908_dJ6ZNYHvovu3CM7uUXlS7FPBYWFGRhVu.jpg'
                width={60}
                height={60}
                alt="logo" />
            </div>
            <p className="text-blue-600 capitalize"> Welcome to Chat App</p>
           </div>
           <Link className="bg-blue-500 hover:bg-blue-700  px-8 py-2 rounded-md" href='auth/signin'> Sign In</Link>
        </div>
        
    </header>
  )
}

export default Header;