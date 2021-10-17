import React from 'react'

import './about.styles.scss'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">

        <h3 className="subtitle">¿Qué es Sopator?</h3>
        <p className="text">
          Una Sopa de Letras es un popular y divertido juego que es prácticado por personas de toda edad (niños, jovenes, adultos y ancianos), debido a la simpleza de sus reglas y la capacidad de poder incluir un sin fin de palabras que podrían estar vinculadas en una temática común que podrían ser de interes del la persona que lo juega.
        </p>
        <p className="text">
          Si bien este juego es divertido, pero muchas veces el proceso de creación puede resultar siendo un poco complicado; es entonces que nace esta sencilla herramienta.
        </p>
        <p className="text">
          Sopator es una aplicación web de código abierto, cuya principal finalidad es la de agilizar la de creación de <strong>sopas de letras</strong> de manera fácil y rpida, reduciendo el tiempo y el esfuerzo empleado por el usuario.
        </p>
        <p className="text">
          La interfaz de usuario es sencilla e intuitiva, lo cual permite que el usuario tenga una experiencia satisfactoria.
        </p>

        <h3 className="subtitle">Acerca de los creadores</h3>
        <p className="text">
          Sopator fue diseñada y creada en su totalidad por los autores, con el único fin de aportar a la comunidad una aplicación que pueda ser de utilidad.
        </p>

        <div className="card-container">
          
          <div className="card mr-32">
            <div className="circle">
              <img src="assets/images/joeltinx.jpg" className="circle" alt="joeltinx" />
            </div>
            <div className="author-description">
              <h3>Joel Tinoco</h3>
              <p>Programmer</p>
            </div>
          </div>

          <div className="card">
            <div className="circle">
            </div>
            <div className="author-description">
              <h3>Emily Lapa</h3>
              <p>Reviewer and content fixer</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutPage
