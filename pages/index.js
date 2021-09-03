import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function Home() {
  const[stores, setStores] = useState([]);
  
  const newStore = async(store) => {
    store.avgSale = Number(store.avgSale);
    store.maxCustomers = Number(store.maxCustomers);
    store.minCustomers = Number(store.minCustomers);

    const response = await axios.post('https://salmon-cookie-api.azurewebsites.net/api/Store', store);
    console.log(response.data);
    await getStores();
  }

  const getStores = async () => {
    const response = await axios.get('https://salmon-cookie-api.azurewebsites.net/api/Store');
    setStores(response.data);
  }

  const deleteStore = async(id) => {
    const response = await axios.delete(`https://salmon-cookie-api.azurewebsites.net/api/Store/${id}`);
    await getStores();
  }

  useEffect(()=>{
    console.log('effect is running');
    getStores();
  }, []);

  return (
    <>
      <Header/>
      <Main newStore={newStore} stores={stores} deleteStore={deleteStore}/>
      <Footer stores={stores}/>
    </>
  );
}