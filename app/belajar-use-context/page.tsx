/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
 
 
function Page() {
  const appContext = useContext(AppContext)
  
  const {toggleTheme,logout, isAuthenticated} = appContext;
 
  const router = useRouter();
 
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("login");
    }
  }, [isAuthenticated]);
 
  return (
    <div className="grid grid-cols-1 gap-5 mt-5 ">
     <Button title="ubah Tema" colorSchema="blue" variant="outline" isLoading={false} onClick={toggleTheme}/>
     <Button title="Logout" colorSchema="red" isLoading={false} onClick={logout}/>
    </div>
  );
}
 
export default Page;