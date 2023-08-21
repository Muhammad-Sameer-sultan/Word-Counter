import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(link_names){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-dark bg-dark ">
        <div className="container-fluid f-flex justify-content-center ">
          <a className="navbar-brand fs-2" href="/">{link_names.title}</a>
          
         
        </div>
      </nav>
    )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    link1: PropTypes.string,
    link2: PropTypes.string
}

Navbar.defaultProps={
    title: 'this is logo',
    link1: 'this is logo',
    link2: 'this is logo'
}

// Navbar.defaultProps = {
//     title: 'Mary'
//   };