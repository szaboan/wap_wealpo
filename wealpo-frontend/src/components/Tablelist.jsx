export default function Tablelist({handleOpen}) {

    const products = [
        { id: 1, name: '27" LG 27QP88DP-BS LCD monitor', category: 'Monitor', price: '250 560 Ft' },
        { id: 2, name: 'SAL BT 5000 Bluetooth Hangszóró, Fekete', category: 'Hangszóró', price: '23 990 Ft' },
        { id: 3, name: 'Canon Pixma MG2551S Tintasugaras nyomtató, Szürke', category: 'Nyomtató', price: '18 389 Ft' },
        { id: 4, name: 'Apple iPhone 14 128GB - Kék', category: 'Mobiltelefon', price: '293 676 Ft' },
        { id: 5, name: 'Samsung Galaxy Tab S8 128GB WiFi - Ezüst', category: 'Tablet', price: '249 990 Ft' },
        { id: 6, name: 'Sony WH-1000XM5 Vezeték nélküli fejhallgató', category: 'Fejhallgató', price: '149 990 Ft' },
        { id: 7, name: 'Dell XPS 13 9310 Ultrabook', category: 'Laptop', price: '599 990 Ft' },
        { id: 8, name: 'Xiaomi Mi Smart Band 7 Okoskarkötő', category: 'Okoskarkötő', price: '19 990 Ft' },
        { id: 9, name: 'Philips Hue White and Color Ambiance LED izzó', category: 'Okosizzó', price: '24 990 Ft' },
        { id: 10, name: 'GoPro HERO11 Black Akciókamera', category: 'Akciókamera', price: '179 990 Ft' },
        { id: 11, name: 'Logitech MX Master 3S Egér', category: 'Egér', price: '39 990 Ft' },
        { id: 12, name: 'Asus ROG Strix RTX 3080 Ti Videókártya', category: 'Videókártya', price: '599 990 Ft' },
        { id: 13, name: 'Bose SoundLink Revolve+ II Bluetooth Hangszóró', category: 'Hangszóró', price: '119 990 Ft' },
        { id: 14, name: 'Samsung 980 Pro 1TB NVMe SSD', category: 'SSD', price: '59 990 Ft' },
    ];

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Megnevezés</th>
                            <th>Kategória</th>
                            <th>Ár</th>
                            <th>Módosítás</th>
                            <th>Törlés</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => handleOpen('edit')} className="btn btn-soft btn-accent btn-sm">Módosítás</button>
                                </td>
                                <td>
                                    <button className="btn btn-soft btn-error btn-sm">Törlés</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}