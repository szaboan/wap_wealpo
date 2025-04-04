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

  const handleOpen = (mode) => {
    console.log('handleOpen');
    setIsOpen(true); // Megnyitjuk a modalt
    console.log('1handleOpen - isOpen:', isOpen); // Kiírja az isOpen értékét

    setModalMode(mode); // Beállítjuk a módot
    console.log('2handleOpen - isOpen:', isOpen); // Kiírja az isOpen értékét
  }

  const handleSubmit = () => {
    console.log('handleSubmit');
    if (modalMode === 'add') {
      console.log('modal mode add');
    } else {
      console.log('modal mode edit');
    }
  }

  return (
    console.log('App.jsx-ben isOpen:', isOpen),
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
      <Tablelist handleOpen = {handleOpen} searchTerm={searchTerm}/>
      <ModalForm isOpen={isOpen} OnSubmit={handleSubmit} onClose={() => setIsOpen(false)} mode={modalMode} />
    </>
  )
}

export default App
