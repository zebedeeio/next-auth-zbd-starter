import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const signInHandler = (e) => {
    e.preventDefault();
    signIn();
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <header>
        <nav className="flex flex-row p-4 mb-4 bg-black justify-between relative">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ZBD Hackathon Logo"
              width={300}
              height={32}
            />
          </Link>
          <div>
            {!loading && !session && (
              <ButtonPrimary
                buttonText={"Log In"}
                functionCall={signInHandler}
              />
            )}
            {!loading && session?.user && (
              <div className="flex flex-row">
                <span>
                  <Link href="/team">
                    <Image
                      src={session.user.image}
                      alt="User Profile Image"
                      className="md:h-12 md:w-12 rounded-full mr-4 hidden md:inline-block"
                      width={12}
                      height={12}
                    />
                  </Link>
                </span>
                <span>
                  {session.user.image && (
                    <div className="align-middle px-5">
                      <ButtonPrimary
                        buttonText={"Log Out"}
                        functionCall={signOutHandler}
                      />
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
