import React from 'react'
import { Link } from 'react-router-dom'
import '@site/styles/about-page.css'

const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        <Link to="/badlink">Click</Link> to see the 404 page.
      </p>
    </div>
  )
}

export default AboutPage
