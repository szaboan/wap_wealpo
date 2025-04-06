import { useState } from 'react'
import Navbar from '../components/Navbar';
import Tablelist from '../components/Tablelist';
import ModalForm from '../components/ModalForm';

export default function Home({
    setTableData,
    tableData,
    handleOpen,
    searchTerm,
    isOpen,
    modalMode,
    productData,
    handleSubmit,
    setSearchTerm,
    setIsOpen,
}) {
    return (
        <>
            <Navbar 
                onOpen={() => handleOpen('add')} 
                onSearch={setSearchTerm} />
            <Tablelist 
                setTableData={setTableData} 
                tableData={tableData} 
                handleOpen={handleOpen} 
                searchTerm={searchTerm} />
            <ModalForm 
                isOpen={isOpen} 
                OnSubmit={handleSubmit} 
                onClose={() => setIsOpen(false)} 
                mode={modalMode} 
                productData={productData} />
        </>
    );
}