import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux';

function ProductContainer() {

    const productState = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
    },[])
  return (
    <div className='prod-container'>

        {productState && productState.loading && <div>Loading....</div>}
        {productState && productState.error && <div>{productState.error}</div>}
        {productState && !productState.loading && !productState.error && (
            <div className="box">
                {
                    productState.products.map((pName, index) =>{
                        return <div className="p-title" key={index}>{pName}</div>
                    })
                }
            </div>
        )}

        
    </div>
  )
}

export default ProductContainer