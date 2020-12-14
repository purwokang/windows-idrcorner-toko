import React, { Component } from 'react'
import axios from 'axios'

export class DaftarProduk extends Component {

    state = {
        produk: []
    }

    async componentDidMount() {
        await axios.get('http://localhost/tokoAPI/ambildata.php')
            .then(response => this.setState({
                produk: response.data
            }))

        console.log(this.state);
    }

    render() {
        return (
            <div>
                Daftar Produk
            </div>
        )
    }
}

export default DaftarProduk
