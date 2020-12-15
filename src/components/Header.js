import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className="container">
                <p className='navbar-brand'>Toko kPw</p>

                <ul className='nav nav-pills justify-content-end'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/add' className='nav-link'>Add Produk</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
