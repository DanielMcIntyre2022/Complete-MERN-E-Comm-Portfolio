import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: `http://localhost:3090`
})

function Products() {

  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.data);
        console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`)
        }
      }
    }

    fetchProducts();
  },[]);

  return (
    <div className='products-container'>
      <div className='border border-gray-800 product-container'>
        {
          products.map(product => {
            return <>
              <div className='product-image'>
                <img src={product.image}/>
              </div>
              <div className='product-name'>
                <p>{product.name}</p>
              </div>
              <div className='product-price'>
                <p>${product.price}</p>
              </div>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Products;