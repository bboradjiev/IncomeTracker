import React, {useContext} from 'react';
import {GlobalContext} from '../components/context/GlobalState';

function Transaction({el}) {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <div className='transaction'>
            <ul id='list' className='list'>
                <li className={el.amount > 0 ? 'plus' : 'minus'}>{el.text}<span>{el.amount > 0 ? '+' : '-'}{Math.abs(el.amount)}</span>
                <button onClick={()=> deleteTransaction(el.id)} className='delete-btn'>x</button>
                </li>
            </ul>
        </div>
    );
};

export default Transaction;
