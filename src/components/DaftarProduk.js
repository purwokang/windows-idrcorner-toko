import React, { Component } from 'react'
import CardProduk from './CardProduk'
import API from '../axios/Api'

export class DaftarProduk extends Component {

    state = {
        produk: []
    }

    componentDidMount = async () => {
        await API.get('ambildata.php')
            .then(response => this.setState({
                produk: response.data
            }))

        // console.log(this.state); mengintip hasil koneksi database
    }

    render() {

        const renderData = this.state.produk.map(produk => {
            return (
                <CardProduk produk={produk} key={produk.id} refresh={this.componentDidMount} />
            )
        })

        return (
            <div className="container">
                <div className='row'>
                    {renderData}
                </div>
            </div>
        )
    }
}

export default DaftarProduk
