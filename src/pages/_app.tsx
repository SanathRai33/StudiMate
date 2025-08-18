import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <div className="min-h-screen flex flex-col bg-white">
        <title>StudiMate</title>
        <Navbar />
        {/* <Toaster /> */}
        <div className="flex flex-1 flex-col-reverse md:flex-row">
          {/* <Sidebar /> */}
          <Component {...pageProps} />
        </div>
      </div>
  )
}
