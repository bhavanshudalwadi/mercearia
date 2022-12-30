import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import productContext from '../contexts/product/productContext'
import '/product-list.css'

const Products = () => {
    const { products } = useContext(productContext);

    return (
        <div>
            <h2 className="ms-4 mt-3">Products</h2>
            <div className="container-fluid product-list">
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    {products && products.map((product) => 
                        <Link to={`/products/${product.id}`} style={{textDecoration: 'none', color: 'initial'}}>
                            <div className="col">
                                <div className="item h-100">
                                    <div className="card m-3">
                                        <img src={`/p/${product.img}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <span className="card-text p-name">{product.name.substring(0, 32)}</span>
                                            <span className="card-text text-primary p-price">{product.qty} {product.product_type} X {product.qty_per_unit} {product.single_product_type}</span>
                                            <span className="card-text p-price">Price: ₹ {product.price.toString()}</span>
                                            <span className="card-text p-price">1 Unit: ₹ {product.price/product.qty_per_unit}</span>
                                            <span className="p-mrp">M.R.P.: </span>
                                            <strike className="card-text p-mrp">₹ {product.mrp}</strike>
                                            <span className="text-success p-save">Save ₹ {product.mrp-product.price}</span>
                                            <span className="text-secondary p-save">Seller: {product.seller}</span>
                                        </div>
                                        <div className="card-img-overlay">
                                            <span className="badge bg-danger">{(100-(product.price*100)/product.mrp).toFixed(2)} %</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="view-more">
                <button type="button" className="btn btn-primary btn-sm fs-5 d-flex btn-viewmore"><i className="bi bi-list-task me-2"></i><span className="fs-6">View More</span></button>
            </div>
        </div>
    )
}

export default Products
