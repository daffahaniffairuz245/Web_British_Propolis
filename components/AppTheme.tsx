"use client";
import { ReactNode, useContext } from "react";
import clsx from "clsx";
import { AppContext } from "@/app/context/AppContext";
import Button from "./Button";
import { signOut } from "next-auth/react";
 
interface ThemeProps {
  title: string;
  children: ReactNode;
}
 
const AppTheme: React.FC<ThemeProps> = ({ title, children }) => {
  const appContext = useContext(AppContext);
  const { theme } = appContext;
  return (
    <>
      <header
        className={clsx(
          ` w-full  h-[5%] flex font-semibold items-center px-5`,
          {
            "bg-gray-500": theme === "light",
            "bg-blue-700 text-white ": theme === "dark",
          }
        )}
      >
        {title}
        {/* <Button colorSchema="red" title="logut" /> */}
      </header>
      <div
        className={clsx(` h-full w-full`, {
          "bg-gray-200": theme === "light",
          "bg-gray-800 text-white ": theme === "dark",
        })}
      >
        {children}
      </div>
    </>
  );
};
 
export default AppTheme;