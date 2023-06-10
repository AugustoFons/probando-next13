import Ficha from "./Ficha"
import Link from "next/link";

export const metadata = {
  title: 'Next.js | Personas',
  description: 'Probando next.js'
  }

const cargarDatos = () => {         //en next no requerimos useEfecct ya que compilamos del lado del servidor 
  return fetch('https://randomuser.me/api/?results=8',{cache: 'no-store'}) //con el segundo parametro evitamos que al recargar muestre el cache y en cambio vuelva a realizar la peticion
  .then(res=>res.json())      //puede cambiar cache por { {next: revalidate:60} } y se refresca cada 60 segundos
  .then(datos=>datos.results)
}

export default async function page() {
  const datos = await cargarDatos()
  return (
    <>
    <div className="personas">
      {datos.map((valor, indice)=>
        <Ficha key={indice} valor={valor} />
      )}
      </div>
      <nav style={{paddingTop: '30px'}}>
        <Link href='/personas/probando'>Subruta</Link>
      </nav>
    </>
  )
}
