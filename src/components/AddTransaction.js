import React, {useState, useContext} from 'react'
import {GlobalContext} from "../components/context/GlobalState"

function AddTransaction() {

    const {AddTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        };
        setText('');
        setAmount(0)
        AddTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Text</label>
                    <input  type='text' 
                            placeholder='Enter Text'
                            value={text}
                            onChange={e => setText(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Amount<br/></label>
                <input  type='number' 
                        placeholder='Enter amount...'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}/>
                </div>
                <button className='btn' onChange={(e) => e.preventDefault}>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
