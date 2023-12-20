import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Menu } from 'lucide-react'

export default function Header() {
  const [click, setClick] = useState(false)
  const [gradient, setGradient] = useState("")
  const toggleNavbar = () => {
    setClick(!click)
    if (!click) {
      setGradient("linear-gradient(to right, #8a3ab9, #ae45c3, #db61a2)");
    } else {
      setGradient("");
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setGradient("");
      setClick(false); // Cierra el menú si la pantalla es lo suficientemente grande
    }
  };

  useEffect(() => {
    // Agrega el listener del evento resize cuando el componente se monta
    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <header style={{ background: gradient }} className="">
        <nav className="flex flex-row align-middle p-4  text-white justify-between border-b-4 border-purple-400/[.20]">
          <div className="flex flex-row space-x-4 ">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Global Hackathon League Logo"
                width={84}
                height={42}
              />
            </Link>
            <ul className="hidden md:flex flex-row space-x-6 items-center">
              <li>
                <Link className="hover:text-purple-500" href="/hackathons">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-purple-500"
                  href="https://emeralize.app/marketplace"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/organizers">
                  Organizers
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/sponsor">
                  Sponsor
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:block hidden">
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
                      className="h-12 w-12 rounded-full mr-2 inline-block"
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
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center rounded-md text-white md:text-white hover:text-white focus:ring-3 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
              {click ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>

          </div>
        </nav>
        {click && (
          <div className="md:hidden absolute inset-x-0 top-1/3 transform -translate-y-1/2 z-50" style={{ background: gradient }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col items-center justify-center gap-3 font-bold text-lg">
                <li>
                  <Link className="hover:text-purple-500" href="/hackathons">
                    Hackathons
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-purple-500"
                    href="https://emeralize.app/marketplace"
                  >
                    Learn
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-500" href="/organizers">
                    Organizers
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-500" href="/sponsor">
                    Sponsor
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-500" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="md:hidden mt-10">
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
                              className="h-12 w-12 rounded-full mr-2 inline-block"
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
                </li>
              </ul>

            </div>
          </div>
        )}

      </header>
    </div>
  );
}
