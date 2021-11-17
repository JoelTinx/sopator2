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
          Una sopa de letras es un popular y divertido juego que es practicado por personas de toda edad, debido a la simpleza de sus reglas y la capacidad de poder incluir un sin fin de palabras que por lo general están vinculadas en una temática común que puede ser de interés de la persona que lo juega. Si bien este juego es divertido, en ocasiones el proceso de creación puede resultar siendo un poco laborioso; es por ello que nace esta sencilla herramienta. 
          <strong> Sopator</strong> es una aplicación web de código abierto, cuya principal finalidad es la de agilizar la de creación de sopas de letras de manera fácil y rápida, reduciendo el tiempo y esfuerzo empleado por el usuario. La interfaz gráfica es sencilla e intuitiva, la cual permite tener una experiencia satisfactoria.
        </SimpleText>

        <SubTitle>Acerca de los creadores</SubTitle>
        <SimpleText>
          Sopator fue diseñado y construido en su totalidad por los autores, con el único fin de aportar a la comunidad una aplicación que pueda ser de utilidad.
        </SimpleText>

        <SubTitle>Código Fuente</SubTitle>
        <SimpleText>
          Usted puede descargar el código fuente de esta aplicación desde nuestro <a href="https://github.com/JoelTinx/sopator2" target="_blank">repositorio de GitHub</a>, son bienvenidos las sugerencias y comentarios.
        </SimpleText>

        <AuthorList authors={authors} />
      </div>
    </div>
  )
}

const SubTitle = ({ children }) => (<h3 className="subtitle">{children}</h3>)
const SimpleText = ({ children }) => (<p className="text">{children}</p>)

export default AboutPage
