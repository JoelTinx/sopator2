import React from 'react'
import './about.styles.scss'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">

        <h3 className="subtitle">¿Qué es Sopator?</h3>
        <p className="text">
          Sopator es una aplicación web de código abierto, cuya principal finalidad es la de agilizar la tarea de creación de <strong>sopas de letras</strong> de forma fácil y veloz, reduciendo el tiempo y el esfuerzo empleado por el usuario.
        </p>
        <p className="text">
          La interfaz de usuario es sencilla e intuitiva, lo cual permite que el usuario tenga una experiencia satisfactoria.
        </p>

        <h3 className="subtitle">Acerca del autor</h3>
        <p className="text">
          Sopator fue diseñada y creada en su totalidad por el ingeniero de sistemas <strong>Joel Tinoco</strong>, con el fin de aportar a la comunidad una aplicación que pueda ser de ayuda.
        </p>

      </div>
    </div>
  )
}

export default AboutPage
