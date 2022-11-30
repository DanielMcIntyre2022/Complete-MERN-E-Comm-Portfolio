import axios from 'axios';
import { useEffect, useState } from 'react';
import { increase } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const api = axios.create({
  baseURL: `http://localhost:3090`
})

function Products() {

  const [products, setProducts] = useState([]);

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

  const dispatch = useDispatch();

  return (
    <div className='flex products-container'>
        {
          products.map(product => {
            return <div className='border border-gray-800 product-container p-2 mt-5'>
              <div className='product-image'>
                <img src={product.image}/>
              </div>
              <div className='product-name'>
                <p>{product.name}</p>
              </div>
              <div className='flex justify-between product-price'>
                <p>${product.price}</p>
                <button 
                onClick={() => {
                  // dispatch(increase({_id}))
                }}
                className='amount-btn bg-slate-300 rounded-lg p-2'>Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
  )
}

export default Products;