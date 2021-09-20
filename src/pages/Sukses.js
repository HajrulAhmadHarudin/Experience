import axios from 'axios';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { urlApi } from '../utils/Constan';

export default class Sukses extends Component {
    componentDidMount() {
        axios.get(urlApi + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                keranjangs.map(function(item){
                    return axios
                    .delete(urlApi+"keranjangs/"+item.id)
                    .then((res) => console.log(res))
                    .catch((error) => console.log(error))
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="sukses">
                <h3>Pesanan Anda Sukses</h3>
                <p>Terima Kasih Telah Memesan</p>
                <Button as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}


