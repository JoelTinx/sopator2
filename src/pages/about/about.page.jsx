import React from 'react'

import AuthorList from '../../components/author-list/author-list.component';

import './about.styles.scss'

const AboutPage = () => {
  const authors = [
    {
      name: 'Joel Tinoco',
      imageUrl: 'assets/images/joeltinx.jpg',
      jobTitle: 'Programador',
    },
    {
      name: 'Emily Lapa',
      imageUrl: 'assets/images/emilyls.jpeg',
      jobTitle: 'Revisión y corrección de contenido',
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <SubTitle>¿Qué es Sopator?</SubTitle>
        <SimpleText>
          La Sopa de Letras es un popular y divertido juego que es prácticado por personas de toda edad (niños, jovenes, adultos y ancianos), debido a la simpleza de sus reglas y la capacidad de poder incluir un sin fin de palabras que por lo general estan vinculadas en una temática común y que podrían ser de interes del la persona que lo juega.
          Si bien este juego es divertido, pero muchas veces el proceso de creación puede resultar siendo un poco complicado; es entonces que nace esta sencilla herramienta.
          Sopator es una aplicación web de código abierto, cuya principal finalidad es la de agilizar la de creación de <strong>sopas de letras</strong> de manera fácil y rpida, reduciendo el tiempo y el esfuerzo empleado por el usuario.
          La interfaz de usuario es sencilla e intuitiva, lo cual permite que el usuario tenga una experiencia satisfactoria.
        </SimpleText>

        <SubTitle>Acerca de los creadores</SubTitle>
        <SimpleText>
          Sopator fue diseñado y creada en su totalidad por los autores, con el único fin de aportar a la comunidad una aplicación que pueda ser de utilidad.
        </SimpleText>

        <AuthorList authors={authors} />
      </div>
    </div>
  )
}

const SubTitle = ({ children }) => (<h3 className="subtitle">{children}</h3>)
const SimpleText = ({ children }) => (<p className="text">{children}</p>)

export default AboutPage
