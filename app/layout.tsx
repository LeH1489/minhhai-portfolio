import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Minh Hai | Personal Portfolio",
  description:
    "Minh Hai is a senior student in Hutech University with some experience with ReactJS(NextJS), NodeJS, C# .NET CORE 7.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative 
        pt-28 
        sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
        `}
      >
        <div
          className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]
        dark:bg-[#946263]
        "
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 letf-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]
        md:left-[-33rem]
        lg:left-[-28rem]
        xl:left-[-15rem]
        2xl:left-[-5rem]
        dark:bg-[#676394]
        "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
