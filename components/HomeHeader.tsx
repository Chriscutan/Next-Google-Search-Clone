import Link from "next/link"
import { Squares2X2Icon } from "@heroicons/react/20/solid"
import Image from "next/image"

function HomeHeader() {
  return (
    <header className="flex items-center space-x-5 justify-end p-3 text-white text-sm">
        <Link className="hover:underline" href={'https://mail.google.com/'}>
            Gmail
        </Link>

        <Link className="hover:underline" href={'https://www.google.com/imghp?hl=en&authuser=0&ogbl'}>
            Images
        </Link>

        <Squares2X2Icon className="h-6 w-6"/>

        <button>
            <Image src="../public/next.svg" height={10} width={10} className="rounded-full" alt="profile" />
        </button>
    </header>
  )
}

export default HomeHeader