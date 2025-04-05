import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import ModalForm from './components/ModalForm'
import axios from 'axios'

function App() {
  console.log('App komponens inicializálva'); // Ez a legelső kiírás
  
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState([]);

  const handleOpen = (mode, product) => {
    setProductData(product); // Beállítjuk a termékadatokat
    setIsOpen(true); // Megnyitjuk a modalt
    setModalMode(mode); // Beállítjuk a módot
  }

  const handleSubmit = async (newProductData) => {
    console.log('handleSubmit');
    if (modalMode === 'add') {
      console.log('modal mode add');
      try {
          const response = await axios.post('http://localhost:3000/api/products', newProductData);    // API endpoint for fetching products
      }  catch (error) {
          console.error('Error fetching data:', error);
      }
    } else {
      console.log('modal mode edit');
      try {
          const response = await axios.put(`http://localhost:3000/api/products/${productData.id}`, newProductData);    // API endpoint for fetching products
      }  catch (error) {
          console.error('Error fetching data:', error);
      }
    }
  }

  return (
    console.log('App.jsx-ben isOpen:', isOpen),
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
      <Tablelist handleOpen = {handleOpen} searchTerm={searchTerm}/>
      <ModalForm isOpen={isOpen} OnSubmit={handleSubmit} 
      onClose={() => setIsOpen(false)} mode={modalMode} productData={productData}/>
    </>
  )
}

export default App
