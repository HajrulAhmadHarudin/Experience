import axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { urlApi } from '../utils/Constan'

export default class Total extends Component {

    submitTotalBayar = (total) => {
        const pesanan={
            total_bayar: total,
            menus: this.props.keranjangs
        }
        axios.post(urlApi +"pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })
    }

    render() {
        const total = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga
        }, 0)

        return (
            <>
            <div className="total ">
                <div className="total_a">
                    <h4> Total </h4>
                    <h5> Rp. {total} </h5>
                </div>
                <Button onClick = { () => this.submitTotalBayar(total) }>
                    Bayar
                </Button>
            </div>

            <div className="d-sm-block d-md-none">
                <div className="total_a">
                    <h4> Total </h4>
                    <h5> Rp. {total} </h5>
                </div>
                <Button onClick = { () => this.submitTotalBayar(total) }>
                    Bayar
                </Button>
            </div>
            </>
        )
    }
}
