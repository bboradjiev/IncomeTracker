import React, {useContext} from 'react';
import {GlobalContext} from '../components/context/GlobalState';
import Transaction from '../components/Transaction'
 
function TransactionList() {

    const {transactions} = useContext(GlobalContext);

    return (
        <div className='history-container'>
            <h3>History</h3>
            {transactions.map(el => <Transaction key={el.id} el={el}/> )}            
        </div>
    );
};

export default TransactionList;
