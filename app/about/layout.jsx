import React from 'react'

export default function layout({ children }) {
return (
    <>
    <h5>layout para about</h5>
    {children}
    </>
)
}
/* 
    <html lang="en">
        <body>
            {children}
        </body>
    </html> //poniendo esto como el layout principal y sacando el nav , no tenemos el nav en esta pagina
*/