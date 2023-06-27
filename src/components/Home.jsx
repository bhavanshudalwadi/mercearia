import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [categories, setCategories] = useState([
        {
            "id": 1,
            "img": "Beverages.png",
            "name": "Beverages",
            "discount": "50"
        },
        {
            "id": 2,
            "img": "Dairy & Bakery.png",
            "name": "Dairy & Bakery",
            "discount": "50"
        },
        {
            "id": 3,
            "img": "Home Care.png",
            "name": "Home Care",
            "discount": "50"
        },
        {
            "id": 4,
            "img": "Personal Care.png",
            "name": "Personal Care",
            "discount": "50"
        },
        {
            "id": 5,
            "img": "Snacks & Branded Foods.png",
            "name": "Snacks & Branded Foods",
            "discount": "50"
        },
        {
            "id": 6,
            "img": "Staples.jpg",
            "name": "Staples",
            "discount": "50"
        }
    ])

    return (
        <div>
            <div className="slider">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/s-1.jpg" className="d-block w-100" alt="Slider Image 1" />
                        </div>
                        <div class="carousel-item">
                            <img src="/s-2.jpg" className="d-block w-100" alt="Slider Image 2" />
                        </div>
                        <div class="carousel-item">
                            <img src="/s-3.jpg" className="d-block w-100" alt="Slider Image 3" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="highlight">
                <div className="container-fluid bg-highlight">
                    <img src="/h-1.jpg" className="d-block w-100" alt="Slider Image 2" />
                </div>
            </div>
            <div className="top-deals">
                <div className="tit">
                    <div>Top Categories</div>
                </div>
                <div className="category-list">
                    <div className="container-fluid">
                        <div className="row p-2">
                            {categories && categories.map((category)=>
                                <div className="col-4 col-md-2">
                                    <div className="item h-100 w-100">
                                        <Link to={`/products?cat=${category.name.replaceAll(' ','-').toLowerCase()}`} style={{color: 'black'}}>
                                            <div className="card h-100 w-100">
                                                <img src={`/c/${category.img}`} className="card-img-top" alt="..." />
                                                <div className="card-body text-center mt-3">
                                                    <span className="card-text p-name" style={{textDecoration: 'none'}}>{category.name}</span>
                                                </div>
                                                <div className="card-img-overlay">
                                                    <span className="badge bg-danger">{category.discount}%</span>
                                                </div>
                                            </div>    
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home
