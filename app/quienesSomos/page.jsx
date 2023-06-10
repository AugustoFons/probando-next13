import style from '../../styles/quienesSomos.module.css'

export const metadata = {
    title: 'Next.js | Quienes Somos',
    description: 'Probando next.js'
    }

export default function page() {
    return (
        <div className={style.container}>
            <h1>Quienes Somos</h1>
        </div>
    )
}
