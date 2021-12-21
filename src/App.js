// import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xc2c6786ED8a5e5f815d1347638365514e44F1467&order_direction=asc'
      )
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }
    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && ( 
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <Punklist 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk}
          selectedPunk={selectedPunk}
          />
        </>
        )
      }

    </div>
  );
}

export default App;
