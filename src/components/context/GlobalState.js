import React,{ createContext, useReducer } from "react";
import AppReducer  from '../context/AppReducer';


const initialState = {
    transactions: [
        
    ]    
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const AddTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };

    return (
        <GlobalContext.Provider value={{transactions: state.transactions,
                                        deleteTransaction,
                                        AddTransaction}}> 
            {props.children}
        </GlobalContext.Provider>
    );
};