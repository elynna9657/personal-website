import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1 className="blue-center">HOME</h1>
        <Link href={'/about'}>Go to Course List</Link>
        <div>
          <Image 
            src="/maltipoo.webp" 
            alt="This is an image of a Maltipoo"
            width={1512}
            height={1134}
            className="maltipoo"
          />
        </div>
      </div>
  )
}
