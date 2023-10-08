import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// initiate state
const initiateState = {
    transactions:[]
}

// create context

export const GlobalContext = createContext(initiateState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initiateState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    
    //Add transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>

    )

}