import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-gray-950 items-center justify-center  text-white min-h-screen ">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center md:px-4 my-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
