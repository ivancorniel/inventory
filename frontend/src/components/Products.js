import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function Products() {
  
  const [Products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/products_list');
                setProducts(res.data)
            }
            catch (err) {

            }
        }
        fetchProducts()   
    }, [])

    const productsList = () => {
        let results = [];
        Products.map(product => {
            return results.push(
              <div key={product.id} className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src='https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg' alt='' />
                <div className="card-body">
                  <h3 className="card-text">{product.title}</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <h4 className="text-muted">{product.amount} | {product.value * product.amount}</h4>
                  </div>
                </div>
              </div>
            </div>
            )
        })
        return results
    }

  return (
    <div className="album bg-light">
    <div className="container">
    <Link to='/add_product' style={{width:'100%'}} className="btn btn-secondary mb-3" >Agregar Medicamento</Link> 

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        {productsList()}
        
      </div>
    </div>
  </div>
  );
}

export default Products;
