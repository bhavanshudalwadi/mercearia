import React, { useState, useContext, useEffect } from 'react'
import productContext from '../contexts/product/productContext'
import { Link, useParams } from 'react-router-dom'
import cartContext from '../contexts/cart/cartContext';

const ProductDetails = () => {
    const { products, getProducts } = useContext(productContext);
    const { cart, addToCart, removeFromCart, updateCart } = useContext(cartContext);
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [isExist, setIsExist] = useState(false);
    const [selected, setSelected] = useState(0);
    const [option, setOption] = useState(null);
    const [opIndex, setOpIndex] = useState(0);

    useEffect(() => {
        if(products.length <= 0) {
            getProducts();
        }else{
            let arr = products.filter(product => product.id === params.id);
            if(arr.length>0) {
                setProduct(arr[0]);
                setOption(arr[0].qty_options[0]);
    
                let arr_cart = cart.filter(item => item.product_id === arr[0].id);
                console.log(arr_cart.length);
                console.log(arr_cart[0]);
                if(arr_cart.length>0) {
                    // console.log(arr_cart[0].qty_option);
                    setSelected(arr_cart[0].qty_option);
                    setIsExist(true);
                    setOption(arr[0].qty_options[arr_cart[0].qty_option]);
                    // handleOptionChange(arr_cart[0].qty_option);
                }else{
                    setSelected(0);
                    setIsExist(false);
                    setOption(arr[0].qty_options[0]);
                }
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
        <div className="container">
        {product !== null && 
            <>
                <div className="row my-5">
                    <div className="col-md-5">
                        <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" style={{backgroundColor: '#999'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" style={{backgroundColor: '#999'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" style={{backgroundColor: '#999'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={`/p/${product.img}`} className="d-block w-100" alt={product.name}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={`/p/${product.img}`} className="d-block w-100" alt={product.name}/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                    </div>
                    <div className="col-md-7">
                        <div className="p-deatils p-2">
                            <h4 className="m-0 fw-bold">{ product.name }</h4>
                            {/* <select className="form-select" aria-label="Default select example">
                                <option selected>1 Combo X 5 Carton</option>
                                <option value="1">1 Combo X 10 Carton</option>
                                <option value="2">1 Combo X 15 Carton</option>
                                <option value="3">1 Combo X 20 Carton</option>
                            </select> */}
                            <p className='m-0 mt-2 text-secondary'>{ product.brand }</p>
                            <div className='mt-2'>
                                <h4 className="d-inline fw-bold">₹ { option.price }</h4>&nbsp;&nbsp;<h6 className="d-inline mt-2">M.R.P.: </h6><h6 className="d-inline text-decoration-line-through">₹ { option.mrp }</h6>
                            </div>
                            <div className="mt-2">
                                <h6 className="d-inline">You Save: </h6><h6 className="text-success d-inline fw-bold">₹ { option.mrp-option.price }</h6>
                            </div>
                            <h6 className='m-0 mt-2 text-success fw-bold'>In Stock</h6>
                            <div className='mt-2'>
                                <h6 className="d-inline">Sold By: </h6><h6 className="text-success d-inline fw-bold">{ product.seller }</h6>
                            </div>
                            <select className="mt-2 form-select" style={{width: 300}} size="3" aria-label="size 3 select example">
                                {product.qty_options.map((option, index) =>
                                    <option selected={index === selected} key={index} onClick={() => handleOptionChange(index)}>{option.qty} {product.product_type} X {option.qty_per_unit} {product.single_product_type}</option>
                                )}
                            </select>
                            {isExist?
                                <div className='d-flex'>
                                    <Link class="btn btn-primary fs-5 mt-3 me-2" to="/cart" role="button" style={{width: 140}}>Go to Cart</Link>
                                    <button type="button" className="btn btn-secondary fs-5 d-flex justify-content-between mt-3 " onClick={() => removeFromCart(product.id)} style={{width: 100}}><span>Remove</span><i className="bi bi-minus-circle fs-5"></i></button>
                                </div>
                                :<button type="button" className="btn btn-primary fs-5 d-flex justify-content-between mt-3 " onClick={() => addToCart(product.id, opIndex)} style={{width: 160}}><span>Add to Cart</span><i className="bi bi-plus-circle fs-5"></i></button>
                            }
                            <div className="input-group mt-3" style={{width: 300}}>
                                <span className="input-group-text" id="pincode"><i className="bi bi-geo-alt-fill"></i></span>
                                <input type="text" className="form-control" placeholder="Enter your Pincode" value="364001" aria-label="Pincode" aria-describedby="pincode" />
                                <button type='button' className='btn btn-outline-secondary'>CHECK</button>
                            </div>
                            <p className='m-0 mt-2 text-success fs-6 fw-bold'>Bhavnagar, Gujarat</p>
                            <h4 className='mt-2'>Available Offers</h4>
                            <ul></ul>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ut! Alias consectetur labore voluptas doloribus dolorem ipsum quod iure blanditiis temporibus, doloremque non velit quaerat pariatur harum veritatis repellat voluptatibus praesentium consequatur vero? Quas, voluptas mollitia officiis suscipit alias vel, ipsum odit unde blanditiis deserunt et voluptate recusandae vero exercitationem?</p>
                </div>
                <div className='mt-2'>
                    <h3>Features & Details</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat rerum aliquam hic, quod quibusdam esse fuga numquam. Quidem, aliquam?</li>
                    </ul>
                </div>
                <div className="mt-2">
                    <h3>Product Information</h3>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td><h5 className="fw-bold">Brand: </h5></td>
                                <td><h5 className=''>{ product.brand }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Sold By: </h5></td>
                                <td><h5 className=''>{ product.seller }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Manufacturer: </h5></td>
                                <td><h5 className=''>{ product.manufacturer.name }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Manufacturer Email: </h5></td>
                                <td><h5 className=''>{ product.manufacturer.email }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Manufacturer Website: </h5></td>
                                <td><h5 className=''>{ product.manufacturer.website }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Country of Origin: </h5></td>             
                                <td><h5 className=''>{ product.manufacturer.country_of_origin }</h5></td>
                            </tr>
                            <tr>
                                <td><h5 className="fw-bold">Manufacturer Address: </h5></td>                   
                                <td><h5 className=''>{ product.manufacturer.address }</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        }
        </div>
    )
}

export default ProductDetails
