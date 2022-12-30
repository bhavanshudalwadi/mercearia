import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand d-flex" to={'/'}>
                    {/* <span className="title">MERCEARIA</span> */}
                    <img src="/logo-2.png" alt="MERCEARIA Logo" style={{display: 'inline', maxHeight: 30, maxWidth: 183, height: 'auto', width: 'auto'}} />
                    <span className="tag-line">Best Products at Reasonable Price.</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="me-auto"></div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-5" type="search" placeholder="Search essentials, groceries, and more …" aria-label="Search" />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-item">
                            <li className="nav-item">
                                <Link className="nav-link m-item" to={'/profile'}><i className="bi bi-person-circle fs-3"></i><span className="ms-1 fs-5 me-4">Profile</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-item" href="#">
                                    <i className="bi bi-cart2 fs-3"></i>
                                    <span className="ms-1 fs-5">Cart
                                        <span className="position-absolute top-9 start-92 translate-middle badge rounded-pill bg-danger">5
                                            <span className="visually-hidden">Cart Items</span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
