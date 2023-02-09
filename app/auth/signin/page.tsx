// import { getProviders } from "next-auth/react";
import Image from "next/image";
// import SignInComponent from "./SignInComponent";

async function SignInPage() {
  // const providers = await getProviders();
  
  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full object-contain h-auto w-auto"
          src="https://t4.ftcdn.net/jpg/03/05/15/39/240_F_305153908_dJ6ZNYHvovu3CM7uUXlS7FPBYWFGRhVu.jpg"
          width={700}
          height={700}
          alt="logo"
        />
      </div>

      {/* <SignInComponent providers={providers} /> */}
    </div>
  );
}
export default SignInPage;
