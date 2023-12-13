import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
