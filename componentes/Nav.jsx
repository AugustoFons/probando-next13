import Link from "next/link";
import {Roboto} from "@next/font/google"

const fuente = Roboto ({
    weight: '400',
    subsets: ['latin'],
    variable: '--mifont'
})

export default function Nav() {
    return (
        <>
            <nav className={fuente.className}>
            <Link href='/'>Home</Link>
            <Link href='/quienesSomos'>Quienes Somos</Link>
            <Link href='/about'>About</Link>
            <Link href='/personas'>Personas</Link>
            <Link href='/blog'>Blog</Link>
            </nav>
        </>

        )
}
