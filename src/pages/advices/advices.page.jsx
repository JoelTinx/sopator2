import React from 'react'

import './../../utils.scss'
import './advices.styles.scss'

const AdvicesPage = () => {
  return (
    <div className="advices-page">
      <div className="container">

        <h3 className="subtitle">Ingredientes para preparar una buena sopa de letras</h3>
        <div className="grid">
          <div className="items-container mr-16">
            <ol className="items-list">
              <li>Ingrese palabras con más de tres ó cuatro caracteres.</li>
              <li>Evite ingresar palabras que contengan espacios.</li>
              <li>Evite ingresar palabras que contengan tíldes, números o caracteres especiales.</li>
              <li>Para editar una palabra ingresada haga doble click sobre la palabra ingresada, corrija el valor y pulse Enter</li>
              <li>Se recomienda utilizar Google Chrome, Chrominium, Mozilla Firefox ó Safari.</li>
              <li>Para la dimensión por defecto se recomienda ingresar menos de 15 palabras.</li>
              <li>Si generas tu sopa de letras en texto y lo copias a un archivo de Microsoft Word u otro, se recominda usar el tipo de fuente "Consolas".</li>
            </ol>
          </div>
          <div>
            <img src="assets/images/sopa-de-letras.jpg" alt="sopa-de-letras" loading="lazy" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdvicesPage
