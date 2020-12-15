import React from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/Api'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardProduk({ produk, refresh }) {

    async function deleteProduk() {
        await API.delete('deleteProduk.php?id=' + produk.id)

        return refresh()
    }

    function deleteConfirm() {
        confirmAlert({
            title: 'Toko kPW',
            message: `Apakah anda ingin menghapus produk ${produk.nama_produk}?`,
            buttons: [
                {
                    label: 'OKE DELETE!',
                    onClick: () => deleteProduk()
                },
                {
                    label: 'NO',
                    onClick: () => { }
                }
            ]

        })
    }

    return (
        <div className='col-md-3 card' style={{ margin: 5 }}>
            <h3>{produk.nama_produk}</h3>
            <small>{produk.deskripsi}</small>
            <p>Harga: Rp. {produk.harga},-</p>
            <p>Stok: {produk.stok}</p>
            <hr />
            <Link to={'/edit/' + produk.id}>
                <i className='fa fa-pencil-square-o' aria-hidden='true' />
            </Link>

            <i className="fa fa-trash" aria-hidden='true' onClick={deleteConfirm} />
            <br />

        </div >
    )
}

export default CardProduk
