"use client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
    // normal home page
    router.push("/");
  };

  return (
    <Button color="red" onClick={handleLogout}>
      Logout
    </Button>
  );
}
