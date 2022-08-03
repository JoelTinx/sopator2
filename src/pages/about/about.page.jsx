import React from 'react'

import AuthorList from '../../components/author-list/author-list.component';

import './about.styles.scss'

const AboutPage = () => {
  const authors = [
    {
      name: 'Joel Tinx',
      imageUrl: 'assets/images/joeltinx.jpg',
      jobTitle: 'Programador',
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <SubTitle>¿Qué es Sopator?</SubTitle>
        <SimpleText>
          <strong> Sopator</strong> es una aplicación web de código abierto, cuya finalidad es facilitar la creación de sopas de letras, reduciendo el tiempo y esfuerzo empleado por el usuario. La interfaz gráfica es sencilla e intuitiva, lo que le permitirá tener una experiencia satisfactoria.
        </SimpleText>

        <SubTitle>Acerca de los creadores</SubTitle>
        <SimpleText>
          Sopator fue diseñado y construido en su totalidad por los autores:
          <AuthorList authors={authors} />
        </SimpleText>

        <SubTitle>Código Fuente</SubTitle>
        <SimpleText>
          El código fuente de esta aplicación se encuentra disponible en GitHub, haga <a href="https://github.com/JoelTinx/sopator2" target="_blank">Click aquí</a>
        </SimpleText>

      </div>
    </div>
  )
}

const SubTitle = ({ children }) => (<h3 className="subtitle">{children}</h3>)
const SimpleText = ({ children }) => (<p className="text">{children}</p>)

export default AboutPage
