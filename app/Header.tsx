import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";


function Header() {

    const session = true;

    if(session) return (
        <header className=" h-20 bg-white sticky top-0 z-50  px-6 pb-2 shadow-md flex items-center justify-between">
          <div className="flex space-x-3 items-center">
            <div >
            <Image
                     className="rounded-full object-contain h-auto w-auto"
                    src='https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    width={50}
                    height={50}
                  
                    alt="logo" />
                
                
            </div>
            <div>
                <p className="text-blue-500">logged in as:</p>
                <p className="font-bold text-black">Samuel Muya</p>
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
                width={80}
                height={80}
                alt="logo" />
            </div>
            <p className="text-blue-600 capitalize"> Welcome to Chat App</p>
           </div>
           <Link className="bg-blue-500 hover:bg-blue-700  px-8 py-2 rounded-md" href='auth/signIn'> Sign In</Link>
        </div>
        
    </header>
  )
}

export default Header;