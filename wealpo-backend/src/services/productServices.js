import { query } from "../db.js"

export const getProducts = async() => {
    const {rows} = await query('SELECT * FROM products');
    return rows;
}

export const createProduct = async(productData) => {
    const { name, category, price } = productData;
    const { rows } = await query(
        `INSERT INTO products (name, category, price) 
         VALUES ($1, $2, $3) RETURNING *`,
        [name, category, price,]
      );
    
    return rows[0];
}


export const updateProduct = async (productId, productData) => {
    const { name, category, price } = productData;
  
    const { rows } = await query(
      `UPDATE products SET name = $1, category = $2, price = $3  
       WHERE id = $4 RETURNING *`,
      [name, category, price, productId]
    );
  
    return rows[0];
  };


export const deleteProduct = async (productId) => {
    const { rowCount } = await query(`DELETE FROM products WHERE id = $1`, [productId]);
    return rowCount > 0; // Returns true if a row was deleted, false otherwise
};

export const searchProducts = async (searchTerm) => {
    const { rows } = await query(
      `SELECT * FROM products WHERE name ILIKE $1 OR category ILIKE $1 OR price ILIKE $1`,
      [`%${searchTerm}%`]
    );
    return rows;
  };