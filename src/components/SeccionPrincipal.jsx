import React from 'react'
import Tarjeta from './Tarjeta'
const seccionPrincipal = () => {
    return (
        <main>
            <div>
                <h1>The Rick and Morty Api</h1>
            </div>
            <div className="Tarjetero">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </main>
    )
}

export default seccionPrincipal
