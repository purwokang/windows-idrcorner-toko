import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className="container">
                {/* <p className='navbar-brand'>Toko kPw</p> */}
                <Link to='/' className='navbar-brand'>Toko kPW</Link>


                <ul className='nav nav-pills justify-content-end'>
                    <li className='nav-item'>
                        <NavLink exact to='/' className='nav-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/add' className='nav-link'>Add Produk</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
