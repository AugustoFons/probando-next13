'use client'    //no se puede renderizar en el servidor, pone info en pantalla despues de haber renderizado
import miCss from './boton.module.css'

export default function Boton({valor}) {
    const masInfo = () => {
        alert(`${valor.name.first} ${valor.name.last}`)
    }
return (
    <>
    <div>
        <button className={miCss.boton} onClick={masInfo}>Ver más</button>
    </div>
    </>
)
}
