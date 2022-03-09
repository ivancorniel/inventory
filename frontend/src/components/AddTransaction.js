import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddTransaction() {

    const [product, setTransactionProduct] = useState(1);
    const [transaction_type, setTransactionType] = useState('OUT');
    const [amount, setTransactionAmount] = useState('');
    const [notes, setTransactionNotes] = useState('');

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

    
    const navigate = useNavigate();

    const addToForm = async () => {

        let formfield = new FormData()

        formfield.append('product', product)
        formfield.append('transaction_type', transaction_type)
        formfield.append('amount', amount)
        formfield.append('notes', notes)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/transaction_create',
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Token 0880921791d37beba9396630e87d07c3e0f19f0b',
            },
            data: formfield,
            
            
        }).then((response) => {

        }, (error) => {

        });
        
    }

    

    return ( 
        
            <div className='container'>
                <h5>Agregar transacci&oacute;n</h5>
                <form encType='multipart/form-data' >
                    <div className="mb-3">
                        <label className="form-label">Nombre del medicamento</label>
                        <select 
                            className="form-control"
                            value={product}                                                        
                            onChange={(e) => {
                                const selection = e.target.value;
                                setTransactionProduct(selection)
                                }
                            }
                        >
                            {Products.map(item => (
                               <option 
                                   key={item.id} 
                                   value={item.id}
                               >
                                   {item.title}
                               </option>
                           )
                       )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Entrada/Salida</label>
                        <select 
                            className="form-control"
                            value={transaction_type} 
                            onChange={(e) => {
                                    const selection = e.target.value;
                                    setTransactionType(selection)
                                }
                            }
                            >
                                <option  value='IN'>Entrada</option>
                                <option  value='OUT'>Salida</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cantidad</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="amount" 
                            aria-describedby="amount"
                            placeholder='Introduce una cantidad'
                            name='amount'
                            value={amount}
                            onChange={(e) => setTransactionAmount(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripci&oacute;n</label>
                        <textarea
                            className="form-control" 
                            name="medicineDescription" 
                            placeholder='Introduce un comentario'
                            value={notes} 
                            onChange={(e) => setTransactionNotes(e.target.value)} 
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={addToForm}>Submit</button>
                </form>
            </div>
        
    );
}

export default AddTransaction;
