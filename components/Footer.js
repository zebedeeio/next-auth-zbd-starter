import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row bottom-0 mt-auto w-full justify-center h-20 px-8 items-center border-t-4 border-purple-400/[.20] text-lg">
      <div className="flex flex-row gap-8">
        <a className="hover:text-lime-400" href="https://github.com/zebedeeio">
          <Github />
        </a>
        <a className="hover:text-lime-400" href="https://x.com/zebedeeio">
          <Twitter />
        </a>
        <a
          className="hover:text-lime-400"
          href="https://www.youtube.com/channel/UCGItMJXj5El1XOWFdsIGb6Q"
        >
          <Youtube />
        </a>
      </div>
    </footer>
  );
}
