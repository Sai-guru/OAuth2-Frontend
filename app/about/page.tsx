import { Button } from "@mantine/core";
import Link from "next/link";

// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Us</h1>
       <Link href="/"><Button variant="subtle" mb="md">← Home</Button></Link>
      <p>This is the about page!</p>
    </div>
  );
}
