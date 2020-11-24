import React, {useContext}  from 'react'
import {GlobalContext} from '../components/context/GlobalState'

function Balance() {

    const {transactions} = useContext(GlobalContext);

    const calculateTotal = () =>{
        let total = 0;
        transactions.map(el => total += el.amount);
        return total;
    };
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{calculateTotal()}$</h1>
        </div>
    );
};

export default Balance;
