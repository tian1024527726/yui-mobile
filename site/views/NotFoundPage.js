import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '@ui'

const NotFoundPage = () => {
  return (
    <div>
      <Title size='4'>
        404 Page Not Found
      </Title>
      <Link to="/"> Go back to homepage </Link>
    </div>
  )
}

export default NotFoundPage
