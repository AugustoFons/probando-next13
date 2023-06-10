import Link from "next/link"
import "../styles/estilos.css"
import Nav from "@/componentes/Nav"
import {Montserrat} from "@next/font/google"

const fuente = Montserrat ({
    weight: '400',
    subsets: ['latin']
})

export const metadata = {     //ver etiqueta head en otras versiones de next
  title: 'Next.js | mi sitio web',
  description: 'Probando next.js'
}


export default function RootLayout({ children, title }) {
return (
    <html lang="en">
      <body>
        <Nav/>
        <div className={fuente.className}>
          {children}
        </div>
      </body>
    </html>
  )
}