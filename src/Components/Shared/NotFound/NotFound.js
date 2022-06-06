
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import notfound from '../../../images/404-error.jpg'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div>
        <h1>Oops! Don't cry this is 404 error.</h1>
        <p>You might have the wrong address...</p>
        <p className="text-info">You must be right address now.....</p>
        <Link to='/' className='back-baton'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          BACK TO HOMEPAGE
        </Link>
      </div>
      <div>
        <img
          src={notfound}
          alt=''
        />
      </div>
    </div>

  )
}

export default NotFound
