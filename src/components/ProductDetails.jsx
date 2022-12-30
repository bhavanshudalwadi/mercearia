import React, { useState } from 'react'

const ProductDetails = () => {
    

    return (
        <div className="container">
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
                                <img src="/p/amul-butter-500-g-carton.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/p/amul-butter-500-g-carton.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/p/amul-butter-500-g-carton.jpg" className="d-block w-100" alt="..." />
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
                    <div className="p-deatils p-5">
                        <h4 className="m-0 fw-bold">Amul Butter 500g (Carton)</h4>
                        {/* <select className="form-select" aria-label="Default select example">
                            <option selected>1 Combo X 5 Carton</option>
                            <option value="1">1 Combo X 10 Carton</option>
                            <option value="2">1 Combo X 15 Carton</option>
                            <option value="3">1 Combo X 20 Carton</option>
                        </select> */}
                        <p className='m-0 mt-2 text-secondary'>AMUL</p>
                        <div className='mt-2'>
                            <h4 className="d-inline fw-bold">₹ 1225.00</h4>&nbsp;&nbsp;<h6 className="d-inline mt-2">M.R.P.: </h6><h6 className="d-inline text-decoration-line-through">₹ 1300.00</h6>
                        </div>
                        <div className="mt-2">
                            <h6 className="d-inline">You Save: </h6><h6 className="text-success d-inline fw-bold">₹ 1225.00</h6>
                        </div>
                        <h6 className='m-0 mt-2 text-success fw-bold'>In Stock</h6>
                        <div className='mt-2'>
                            <h6 className="d-inline">Sold By: </h6><h6 className="text-success d-inline fw-bold">Pratham Dairy</h6>
                        </div>
                        <select className="mt-2 form-select" style={{width: 300}} size="3" aria-label="size 3 select example">
                            <option selected>1 Combo X 5 Carton</option>
                            <option value="1">2 Combo X 5 Carton</option>
                            <option value="2">3 Combo X 5 Carton</option>
                        </select>
                        <button type="button" className="btn btn-primary fs-5 d-flex justify-content-between mt-3 " style={{width: 160}}><span>Add to Cart</span><i className="bi bi-plus-circle fs-5"></i></button>
                        <div class="input-group mt-3" style={{width: 300}}>
                            <span class="input-group-text" id="pincode"><i class="bi bi-geo-alt-fill"></i></span>
                            <input type="text" class="form-control" placeholder="Enter your Pincode" value="364001" aria-label="Pincode" aria-describedby="pincode" />
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
                            <td><h5 className=''>Amul</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Sold By: </h5></td>
                            <td><h5 className=''>Pratham Dairy</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Manufacturer: </h5></td>
                            <td><h5 className=''>GCMMF Ltd.</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Manufacturer Email: </h5></td>
                            <td><h5 className=''>customercare@amul.coop</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Manufacturer Website: </h5></td>
                            <td><h5 className=''>www.amul.com</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Country of Origin: </h5></td>             
                            <td><h5 className=''>India</h5></td>
                        </tr>
                        <tr>
                            <td><h5 className="fw-bold">Manufacturer Address: </h5></td>                   
                            <td><h5 className=''>Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductDetails
