// Shop.jsx
import { useEffect, useState } from 'react'; // Import useEffect and useState from 'react'
import { addToDB, getShoppingCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'; // Import the Product component from the specified path
import './Shop.css'; // Import the styles from 'Shop.css'

const Shop = () => { // Define the functional component named Shop
    const [products, setProducts] = useState([]); // Declare state variable 'products' and its setter function 'setProducts'
    const [cart, setCart] = useState([]); // Declare state variable 'cart' and its setter function 'setCart'
    useEffect(() => { // Use the useEffect hook to perform side effects in function components
        fetch('products.json') // Fetch data from 'products.json'
            .then(res => res.json()) // Parse the response as JSON
            .then(data => setProducts(data)) // Set the 'products' state with the fetched data
    }, []); // Empty dependency array to run the effect only once

    useEffect(() => {
        // Retrieve the stored cart from the fake database
        const storedCart = getShoppingCart();
        const savedCart = []; // Initialize an array to store products with updated quantities from the stored cart
        // Step 1: Loop through the IDs in the stored cart
        for (const id in storedCart) {
            // Step 2: Find the corresponding product in the current 'products' state by ID
            const addedProduct = products.find(product => product.id === id); // Find the product in the current 'products' state with the matching ID from the stored cart
            if (addedProduct) {
                // Step 3: Add the stored quantity to the product
                const quantity = storedCart[id]; // Retrieve the quantity of the product with the current ID from the stored cart
                addedProduct.quantity = quantity; // Set the quantity of the 'addedProduct' based on the stored quantity
                // Step 4: Add the updated product to the 'savedCart' array
                savedCart.push(addedProduct); // Add the product with updated quantity to the 'savedCart' array
            }
        }
        // Step 5: Set the 'cart' state with the updated cart
        setCart(savedCart);
    }, [products]); // The useEffect will re-run whenever there is a change in the 'products' state to update the cart accordingly

    

    const handleAddToCart = (product) => { // Define a function 'handleAddToCart' that adds a product to the cart
        let newCart = [];
        // const newCart = [...cart, product]; // Create a new array with the existing cart items and the new product
        // If product doesn't exist in the cart, then set quantity = 1
        // If exist update quantity by 1
        const exist = cart.find(pd => pd.id === product.id); // Check if the product already exists in the cart
        if (!exist) {
            // If the product is not in the cart, add it with a quantity of 1
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            // If the product is already in the cart, update its quantity by 1
            exist.quantity = exist.quantity + 1;
            // Create a new array with the updated product quantity and other products
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }
        setCart(newCart); // Update the 'cart' state with the new cart array
        addToDB(product.id); // Add the product ID to the fake database to simulate storage
        
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={handleAddToCart}
                    ></Product>) // Map over the products and render a Product component for each
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop; // Export the Shop component as the default export
