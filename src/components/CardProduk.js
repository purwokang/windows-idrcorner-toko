import React from 'react'
import { Link } from 'react-router-dom'

function CardProduk({ produk }) {
    return (
        <div className='col-md-3 card' style={{ margin: 5 }}>
            <h3>{produk.nama_produk}</h3>
            <small>{produk.deskripsi}</small>
            <p>Harga: Rp. {produk.harga},-</p>
            <p>Stok: {produk.stok}</p>
            <hr />
            <Link to={'/edit/' + produk.id}>
                <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
            </Link>
            <br />

        </div >
    )
}

export default CardProduk
