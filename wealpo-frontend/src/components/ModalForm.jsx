import { useState, useEffect } from 'react'

export default function ModalForm({ isOpen, onClose, mode, OnSubmit, productData }) {
    // Ha isOpen nem true, állítsuk false-ra
    isOpen = isOpen === true

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const productData = {name, category, price: Number(price)}
            await OnSubmit(productData); // Hívjuk meg a szülő komponens OnSubmit függvényét
            onClose(); // Bezárjuk a modalt
        } catch (error) {
            console.error('Error submitting form:', error); 
        }
        onClose(); // Bezárjuk a modalt
    }

    useEffect(() => {
        if (mode === 'edit' && productData) {
            // Ha szerkesztési módban vagyunk, töltsük be a termék adatait
            setName(productData.name || '')
            setCategory(productData.category || '')
            setPrice(productData.price || '')
        } else {
            // Ha új terméket adunk hozzá, ürítsük ki a mezőket
            setName('')
            setCategory('')
            setPrice('')
        }
    }, [mode, productData])


    let message = ''
    if(mode === 'edit') {
        message = <p className="py-4">A módosítani kívánt adatokat írja át a megfelelő mezőkben</p>
    }else{
        message = <p className="py-4">Kérem adja meg az új termék adatait!</p>
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg">{mode === 'edit' ? 'Termék módosítása' : 'Termék hozzáadása'}</h3>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        {message}
                        <label className="input my-4">
                            <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} placeholder="Megnevezés" />
                        </label>
                        <label className="input my-4">
                            <input type="text" className="grow" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Kategória" />
                        </label>
                        <label className="input my-4">
                            <input type="number" className="grow" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Ár" />
                        </label>
                        <button type="submit" className={mode === 'edit' ? 'btn btn-accent' : 'btn btn-success'}>
                        
                            {mode === 'edit' ? 'Változások mentése' : 'Termék hozzáadása'}
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
}