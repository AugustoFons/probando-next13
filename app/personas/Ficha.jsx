'use client'
import Boton from './Boton'
import Image from 'next/image'

//el boton tiene que ir externamente ya que esta pagina se genera en el servidor
const cargador =({src,width})=>{
    return `${src}?w=${width}`
}
const Ficha = ({valor}) => {
return (
    <>
        <div className="persona">
            <h3>{valor.name.first}</h3>
            <Image 
            loader={cargador}
            src={valor.picture.large} 
            alt=""
            width={125}
            height={125}
            />
            <Boton valor={valor} />
        </div>
    </>
)
}

export default Ficha