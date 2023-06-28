import React, { useState, useContext, useEffect } from 'react'
import productContext from '../contexts/product/productContext'
import { Link, useParams } from 'react-router-dom'
import cartContext from '../contexts/cart/cartContext';

const Cart = () => {
  const { products, getProducts } = useContext(productContext);
  const { cart, addToCart, removeFromCart, updateCart } = useContext(cartContext);
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [isExist, setIsExist] = useState(false);
  const [selected, setSelected] = useState(0);
  const [option, setOption] = useState(null);
  const [opIndex, setOpIndex] = useState(0);

  useEffect(() => {
    if(products.length <= 0) {
      getProducts();
    }else{
      setProduct(products[0]);
      setOption(products[0].qty_options[0]);

      let arr_products = [];
      let arr_cart = [];
      products.forEach(pItem => {
        cart.forEach(cItem => {
          if(pItem.id === cItem.product_id) {
            arr_products.push(pItem);
            arr_cart.push(cItem);
          }
        })
      });
      setCartProducts(arr_products);
      if(arr_cart.length>0) {
          setSelected(arr_cart[0].qty_option);
          setIsExist(true);
          setOption(products[0].qty_options[arr_cart[0].qty_option]);
      }else{
          setSelected(0);
          setIsExist(false);
          setOption(products[0].qty_options[0]);
      }
    }
  }, [products, cart])

  const handleOptionChange = (ind) => {
    if(product) {
        let option_obj = product.qty_options.filter((option, index) => index === ind);
        setOption(option_obj[0]);
        setOpIndex(ind);
        if(isExist){
            updateCart(product.id, ind);
        }
    }
  }

  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {cartProducts.length>0 &&
              <h3 className='my-3'>Cart Items</h3>
            }
            {cartProducts.length>0?
              cartProducts.map(product => 
                <div className="card my-3">
                  <div className="card-body p-3 d-flex">
                    <div>
                      <img src={`/p/${product.img}`} alt="" style={{borderRadius: 8, width: 150}}/>
                    </div>
                    <div className='ms-4'>
                      <span className='fs-5'>{product.name}</span>
                      <select className="mt-1 form-select" style={{width: 250}}>
                        {product.qty_options.map((option, index) =>
                            <option selected={index === selected} key={index} onClick={() => handleOptionChange(index)}>{option.qty} {product.product_type} X {option.qty_per_unit} {product.single_product_type}</option>
                        )}
                      </select>
                      <div className="d-flex mt-1 align-items-end">
                        <span className="card-text p-price">₹ {product.qty_options[0].price}</span>
                        <span className="p-mrp ms-3">M.R.P.: </span>
                        <strike className="card-text p-mrp">₹ {product.qty_options[0].mrp}</strike>
                        <span className="text-success p-save ms-3">Save ₹ {product.qty_options[0].mrp-product.qty_options[0].price}</span>
                      </div>
                      <div className="d-flex mt-1 align-items-end">
                        <span className="card-text p-price">1 Unit: ₹ {product.qty_options[0].price/product.qty_options[0].qty_per_unit}</span>
                        <span className="text-secondary p-save ms-3">Seller: {product.seller}</span>
                      </div>
                      <button type="button" className="btn btn-secondary fs-5 d-flex justify-content-between mt-3 " onClick={() => removeFromCart(product.id)} style={{width: 100}}><span>Remove</span></button>
                    </div>
                  </div>
                </div>
              ):(
                <div className="card my-3">
                  <div className="card-body p-3">
                    Your Cart Is Empty :(
                  </div>
                </div>
              )
            }
            {cartProducts.length>0 &&
              <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-primary fs-5 d-flex justify-content-between mb-3"><span>Checkout</span></button>
              </div>
            }
          </div>
          <div className="col-md-3"></div>
          </div>
      </div>
    </div>
  )
}

export default Cart
