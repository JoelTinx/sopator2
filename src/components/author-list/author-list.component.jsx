import React from 'react'

import AboutCard from '../about-card/about-card.component'

const AuthorList = ({ authors }) => {
  return (
    <AuthorContainer>
      { 
        authors.map(author => 
          <AboutCard
            key={author.name}
            name={author.name}
            url={author.imageUrl}
            jobTitle={author.jobTitle}
          />
        )
      }
    </AuthorContainer>
  )
}


const AuthorContainer = ({ children }) => <div className="card-container">{ children }</div>

export default AuthorList
