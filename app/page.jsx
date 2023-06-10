'use client'    //levantar server con npx next dev
import Image from "next/image"
import imagen2 from "../public/images/imagen2.jpg"

const cargador = ({src, width}) => {
    return `https://sothebys-com.brightspotcdn.com/a2/36/${src}?w=${width}`
}

export default function page() {
    return (
        <>
            <div>Pagina principal</div>
            <div className="caja">
                <Image  //width y height obligatorio
                src="/images/imagen1.jpg"   //esta en public!
                width={400}
                height={400}
                layout="responsive"
                />
            </div>
            <div className="caja">
                <Image  //width y height obligatorio
                src={imagen2}
                width={400}
                height={400}
                layout="responsive"
                />
            </div>
            <div className="caja">
                <Image  //width y height obligatorio
                loader={cargador}
                src="d98b2ae3423788c9dffc1e7ed01c/n08359-15-lr-1.jpg"
                width={400}
                height={400}
                layout="responsive"
                />
            </div>
        </>
    )
}
