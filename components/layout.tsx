import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-8">{children}</main>
      <Footer />
    </>
  );
}
