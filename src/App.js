import React from 'react';
import './App.css';
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  
  useEffect(()=> {
    const getMyNfts = async () =>{
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x4c1C821C55c6bb94AF8c5c54e84C9453F2D7AEDc&order_direction=asc'
        )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets) // store api response in punkListData
    }
    return getMyNfts();
  },[])
  
  return (
    <div className="app">
      <Header />
    {punkListData.length > 0 && (     //Check if api call went through before rendering the below components
      <>
      <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
      <PunkList punkListData={punkListData} 
                setSelectedPunk={setSelectedPunk} 
      />
      </>
    )}    
    </div>
  );
}

export default App;
