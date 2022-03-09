import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <section className="py-3 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light mb-3">Inventario de Medicamentos</h1>
        <p>
          <Link to='/products' className="btn btn btn-dark mx-2">Medicamentos</Link> 
          <Link to='/transactions' className="btn btn btn-dark mx-2">Transacciones</Link>
        </p>
      </div>
    </div>
  </section>
  );
}

export default Header;
