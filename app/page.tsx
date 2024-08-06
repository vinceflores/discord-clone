"use client";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Unauthenticated, Authenticated, useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  // const servers = useQuery(api.server.getAllServer)
  return (
    <main>
      <Unauthenticated>
        <SignInButton mode="modal">
          <button>Sign in</button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <section className="flex flex-col gap-3 ">
          {/* {
              servers && servers.map(server => (
                <div key={server._id}>
                  <Image width={50} height={50} className="w-12 h-12" src={server.icon} alt={server.name} />
                  <h1>{server.name}</h1>
                </div>
              ))
            } */}
        </section>
      </Authenticated>
    </main>
  );
}
