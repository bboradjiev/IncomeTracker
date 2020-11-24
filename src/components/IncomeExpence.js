import React, {useContext}  from 'react'
import {GlobalContext} from '../components/context/GlobalState'

function IncomeExpence() {

    const {transactions} = useContext(GlobalContext);
        
    const calculatePositive = () => {
        let positiveTransaction = 0;
        transactions.map( el => {
            if (el.amount > 0){
                positiveTransaction += el.amount}});
        return positiveTransaction.toFixed(2);
    };

    const calculateNegative = () => {
        let negativeTransaction = 0;
        transactions.map( el => {
            if (el.amount < 0){
                negativeTransaction += el.amount}});
        return negativeTransaction.toFixed(2);
    };

    return (
        <div className='inc-exp-container' >
            <div>
                <h4>Income</h4>
                <p className='money plus'>+{calculatePositive()}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p className='money minus'>{calculateNegative()}</p>
            </div>            
        </div>
    );
};

export default IncomeExpence;
