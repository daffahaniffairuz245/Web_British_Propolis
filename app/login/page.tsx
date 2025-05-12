"use client";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";

 
export default function Login() {
  const appContext = useContext(AppContext);
  const { isAuthenticated, login } = appContext;
  const router = useRouter();
 const { data: session, status } = useSession();
  useEffect(() => {
if (session?.user.role === "admin") {
  return router.push("/admin");
}
if (session?.user.role === "member") {
  return router.push("/member");
}

    if (isAuthenticated) {
      router.push("belajar-use-context");
    }
  }, [isAuthenticated,]);
  return (
    <>
      {!isAuthenticated && <h2>Silahkan Login</h2>}
      <Button
        title="Login"
        colorSchema="blue"
        variant="outline"
        onClick={login}
      />
    </>
  );
}