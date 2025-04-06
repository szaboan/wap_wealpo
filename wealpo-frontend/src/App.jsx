import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'

function App() {
  console.log('App komponens inicializálva'); // Ez a legelső kiírás

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');    // API endpoint for fetching products
      setTableData(response.data); // Assuming the response data is an array of products
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  const handleOpen = (mode, product) => {
    setProductData(product); // Beállítjuk a termékadatokat
    setIsOpen(true); // Megnyitjuk a modalt
    setModalMode(mode); // Beállítjuk a módot
  }

  const handleSubmit = async (newProductData) => {

    const { name, category, price } = newProductData;

    // Ellenőrizzük, hogy legalább egy mező ki van-e töltve
    if (!name && !category && !price) {
      console.log('Nem lehet üres adatokat menteni!');
      return; // Ha minden mező üres, kilépünk a függvényből
    }
    
    console.log('handleSubmit');
    if (modalMode === 'add') {
      console.log('modal mode add');
      try {
        const response = await axios.post('http://localhost:3000/api/products', newProductData);    // API endpoint for fetching products
        setTableData([...tableData, response.data]); // Assuming the response data is the newly created product
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      console.log('modal mode edit');
      try {
        const response = await axios.put(`http://localhost:3000/api/products/${productData.id}`, newProductData);    // API endpoint for fetching products
        setTableData(tableData.map(product => product.id === productData.id ? response.data : product)); // Assuming the response data is the updated product
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  return (
    // console.log('App.jsx-ben isOpen:', isOpen),
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setTableData={setTableData}
                tableData={tableData}
                handleOpen={handleOpen}
                searchTerm={searchTerm}
                isOpen={isOpen}
                modalMode={modalMode}
                productData={productData}
                handleSubmit={handleSubmit}
                setSearchTerm={setSearchTerm}
                setIsOpen={setIsOpen}
              />
            }
          />
          <Route path="/profil" element={<Profile />} />
          <Route path="/rolunk" element={<AboutUs />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
