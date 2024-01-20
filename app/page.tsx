import Link from "next/link";
import Image from "next/image";
import vercel from "../public/vercel.svg";

export default function Home() {
  return (
    <main>
      <h1>Hello Agba devs</h1>
      <Link href="/about">Go to about</Link>
      <Image src={vercel} alt="logo image"  height={10} width={20} />            
    </main>
  );
}
