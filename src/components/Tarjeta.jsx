import React from 'react'

const Tarjeta = () => {
    return (
        <div className="Tarjeta">
            <div className="Tarjeta">
                <img src="" alt="" />
            </div>
            <div className="descripcionTarjeta">
                <h4>
                    <a href="">Nombre Personaje</a>
                </h4>
                <p className="Estado">Estado - Tipo de Criatura</p>
                <div className="LocacionTarjeta">
                    <h5>Ultima localizacion conocida</h5>
                    <p>Localizacion</p>
                </div>
                <div className="LocacionTarjeta">
                    <h5>Primera localizacion conocida</h5>
                    <p>Localizacion</p>
                </div>

            </div>
        </div>

    )
}

export default Tarjeta
