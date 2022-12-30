import Link from "next/link"

export default function Header() {

    return (
        <nav className="bg-black fixed top-0 left-0 w-full">
        <header className="py-4 px-8 flex justify-between items-center">
            <Link href='/'>
            <p className="cursor-pointer text-white text-3xl">OB</p>
            </Link>
            <ul className="flex space-x-4 text-white">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Contact</li>  
            </ul>
        </header>
        </nav>
    )
}