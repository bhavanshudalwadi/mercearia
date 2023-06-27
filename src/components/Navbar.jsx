import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../contexts/users/userContext'
import cartContext from '../contexts/cart/cartContext';

const Navbar = () => {
    const {users, getUsers} = useContext(userContext);
    const { cart } = useContext(cartContext);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user') !== null) {
            if(users.length <= 0){
                getUsers();
            }else {
                let arr = users.filter(user => user.phone === JSON.parse(localStorage.getItem('user')).phoneNumber);
                setUser(arr[0].fname)
            }
        }
    },[users])

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
                                
                                    {user ? 
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-person-circle fs-3"></i>
                                                <span className="ms-1 fs-5 me-1">{user}</span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to={'/account'}><i class="bi bi-person me-2"></i>Account</Link></li>
                                                {/* <li><hr class="dropdown-divider"/></li> */}
                                                <li><Link class="dropdown-item" to={'/orders'}><i class="bi bi-box me-2"></i>Orders</Link></li>
                                                {/* <li><hr class="dropdown-divider"/></li> */}
                                                <li><button className='dropdown-item' onClick={() => {localStorage.removeItem("user"); navigate('/login');}}><i class="bi bi-box-arrow-right me-2"></i>Logout</button></li>
                                            </ul>
                                        </li>
                                        :<li class="nav-item">
                                            <Link className="nav-link m-item" to={'/login'}>
                                                <i className="bi bi-person-circle fs-3"></i>
                                                <span className="ms-1 fs-5 me-4">Login</span>
                                            </Link>
                                        </li>
                                    }
                                
                                <li className="nav-item">
                                    <Link className="nav-link m-item" to={'/cart'}>
                                        <i className="bi bi-cart2 fs-3"></i>
                                        <span className="ms-1 fs-5">Cart
                                            <span className="position-absolute top-9 start-92 translate-middle badge rounded-pill bg-danger">{cart.length}
                                                <span className="visually-hidden">Cart Items</span>
                                            </span>
                                        </span>
                                    </Link>
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
