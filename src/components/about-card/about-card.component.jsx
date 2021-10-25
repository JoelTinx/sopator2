import React, { Fragment } from 'react'

const AboutCard = ({ url, name, jobTitle }) => {
  return (
    <Fragment>
      <div className="card m-16">
        <div className="circle">
          { url && <img src={url} className="circle" alt={name} loading="lazy" /> }
        </div>
        <div className="author-description">
          <h3>{name}</h3>
          <p>{jobTitle}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutCard
