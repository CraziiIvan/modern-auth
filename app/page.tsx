import Image from "next/image";

// <Image
// className="dark:invert"
// src="/next.svg"
// alt="Next.js logo"
// width={180}
// height={38}
// priority
// />

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <main>
        <h1 className=" font-medium text-xl">Welcome from home page</h1>
      </main>
    </div>
  );
}
