import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 p-8">

        <div className="gap-4 font-medium ">
      
          <h2 className="text-2xl text-yellow-500">Welcome buddy...</h2>
          <Link href="/auth">
            <button>Login 😇</button>
          </Link>
          <Link href="/about">
            <button>About us 😇</button>
          </Link>
          
          
        </div>
      </main>
    </div>
  );
}
