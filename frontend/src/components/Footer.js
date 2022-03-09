import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="text-muted py-5">
    <div className="container">
      <p className="float-end mb-1">
        <Link to='#'>Iniciar session</Link>
      </p>
      <p className="mb-1">JICH - Inventory &copy; 2022</p>
    </div>
  </footer>
  )
}

export default Footer;
