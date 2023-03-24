"use client";

import { useState, useEffect } from "react";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import Image from "next/image";
import { BuiltInProviderType } from "next-auth/providers";

function SignInPage() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();

      setProviders(providers);
    };

    fetchProviders();
  }, []);

  if (providers === null || undefined) {
    return;
  }

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

      <div className="flex justify-center ">
        {Object.values(providers!).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl:
                    process.env.VERCEL_URL || "http://localhost:3000/",
                })
              }
            >
              Sign In With {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SignInPage;
