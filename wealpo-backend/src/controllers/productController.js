import * as productService from '../services/productServices.js';

export const getProduct = async (req, res) => {
    try {
        const product = await productService.getProducts();
        res.status(200).json(product);
    } catch (err) { 
        console.error('Error fetching product:', err);
        res.status(500).json({ message: 'Internal Server Error1' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await productService.createProduct(productData);
        res.status(200).json(newProduct);
    } catch (err) { 
        console.error('Error adding product:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        const updatedProduct = await productService.updateProduct(productId, productData);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);

    } catch (err) { 
        console.error('Error updating product:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deleted = await productService.deleteProduct(productId);
        if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).send();

    } catch (err) { 
        console.error('Error deleting product:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const searchProduct = async (req, res) => {
    try {
      const searchTerm = req.query.q; // Get the search term from the query parameters
      const product = await productService.searchProducts(searchTerm);
      res.status(200).json(product);
    } catch (error) {
      console.error('Error searching product:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};
  