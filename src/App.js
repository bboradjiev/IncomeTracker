import './App.css';
import Header from '../src/components/Header';
import Balance from '../src/components/Balance';
import IncomeExpence from '../src/components/IncomeExpence';
import TransactionList from '../src/components/TransactionList';
import AddTransaction from '../src/components/AddTransaction';

import {GlobalProvider} from '../src/components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container' >
          <Balance/>
          <IncomeExpence/>
          <TransactionList/>
          <AddTransaction/>
      </div>
      
    </GlobalProvider>
  );
};

export default App;
