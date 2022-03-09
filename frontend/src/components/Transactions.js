import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function Transactions() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/transactions_list');
                setTransactions(res.data)
            }
            catch (err) {

            }
        }
        fetchTransactions()  
    }, [])

    const transacionsList = () => {
        let results = [];
        transactions.map(transaction => {
            return results.push(
                <Link key={transaction.id} to="#" className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{transaction.product} | {transaction.transaction_type} | {transaction.amount}</h5>
                        <small>{transaction.transaction_date}</small>
                    </div>
                    <p className="mb-1">{transaction.created_by}</p>
                </Link>
            )
        })
        return results
    }

    return (
        <div className="album bg-light">
            <div className="container">
                <Link to='/add_transaction' style={{width:'100%'}} className="btn btn-secondary mb-3" >Agregar Transaccion</Link> 

                <div className="list-group">
                   
                    {transacionsList()}
                    
                </div>
            </div>
        </div>

  );
}

export default Transactions;
