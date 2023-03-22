import  { unstable_getServerSession } from "next-auth/next"
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";


  const Header = async () => {
  const session = await unstable_getServerSession();


  if (session) {
    return (
      <header className=" h-20 bg-white sticky top-0 z-50  px-6 pb-2 shadow-md flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <Image
            className="rounded-full object-contain"
            src={session.user?.image!}
            width={50}
            height={50}
            alt="profile pic"
          />

          <div>
            <p className="text-blue-500">logged in as:</p>
            <p className="font-bold text-black">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  }

  return (
    <header className=" bg-white sticky top-0 z-50  pb-2 shadow-md flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 ">
          <div>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlKVsgVJyVp8nSt38L3JFfphnjSUZcw3-Y7XXM-vy4SeNzRI-Wi92KCAlEzDbv9yBVOY&usqp=CAU"
              width={80}
              height={80}
              alt="logo"
            />
          </div>
          <p className="text-blue-600 capitalize "> Welcome to Chat App</p>
        </div>
        <Link
          className="bg-blue-500 hover:bg-blue-700  px-8 py-2 rounded-md"
          href="auth/signin"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
