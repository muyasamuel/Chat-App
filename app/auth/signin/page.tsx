import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";





 async function SignInPage() {

  const providers = await getProviders();
  

    

  
 
  
  return (
    <div className="grid justify-center space-x-1">
      <div>
        <Image
          className="rounded-full object-contain h-auto w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlKVsgVJyVp8nSt38L3JFfphnjSUZcw3-Y7XXM-vy4SeNzRI-Wi92KCAlEzDbv9yBVOY&usqp=CAU"
          width={700}
          height={700}
          alt="logo"
        />
      </div>
      
      <SignInComponent providers={providers} />
  
     </div>

    
  );
}
export default SignInPage;