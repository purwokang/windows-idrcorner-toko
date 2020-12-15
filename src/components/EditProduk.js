import React, { Component } from 'react'
import API from '../axios/Api'

export class EditProduk extends Component {

    state = {
        id: '',
        namaProduk: '',
        deskripsi: '',
        harga: '',
        stok: ''
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await API.get('getProduk.php?id=' + id)
        this.setState({
            id: res.data.id,
            namaProduk: res.data.nama_produk,
            deskripsi: res.data.deskripsi,
            harga: res.data.harga,
            stok: res.data.stok
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault();
        await API.put('prosesedit.php', this.state)
        this.props.history.push('/')
    }

    render() {

        const { namaProduk, deskripsi, harga, stok } = this.state
        return (
            <div className='container'>
                <h2>Edit Produk</h2>
                <form onSubmit={this.handlerSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <td>Nama Produk</td>
                                <td><input type="text" name='namaProduk' value={namaProduk} onChange={this.handlerChange} /> </td>
                            </tr>
                            <tr>
                                <td>Deskripsi</td>
                                <td><input type="text" name='deskripsi' value={deskripsi} onChange={this.handlerChange} /> </td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td><input type="text" name='harga' value={harga} onChange={this.handlerChange} /> </td>
                            </tr>
                            <tr>
                                <td>Stok</td>
                                <td><input type="text" name='stok' value={stok} onChange={this.handlerChange} /> </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value='Edit' className='btn btn-primary' /> </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default EditProduk
