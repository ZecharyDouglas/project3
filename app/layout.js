import "./globals.css";
import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LizardLogo from "./images/LizardLogo.svg";

const urbanist = Urbanist({
  weight: ["800"],
  subsets: ["latin"],
});
const webImage = LizardLogo;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className=" bg-slate-500 block">
        <nav className="mt-16 ml-36 flex w-3/4 rounded-lg shadow-lg items-center bg-sky-700 h-20">
          <Link href="/" className="hover:text-white ml-5 mr-5">
            Home
          </Link>
          <Link href="/userlists" className="hover:text-white mr-5">
            Your Posts
          </Link>
          <Link href="/register" className="hover:text-white mr-5">
            Register
          </Link>

          <div className="flex items-center ml-auto mr-20">
            <Link href="/login" className="hover:text-white mr-5">
              Login
            </Link>
            <Link href="/logout" className="hover:text-white mr-5">
              Logout
            </Link>
            <Image
              src={webImage}
              alt="A lizard belongs here"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </nav>
        <h1 className="flex flex-col justify-center items-center">
          LizardListz, a snazzy list sharing website for you and your friends!
        </h1>
        <div className=" mt-16">{children}</div>
      </body>
    </html>
  );
}
