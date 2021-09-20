import axios from 'axios'
import React, { Component } from 'react'
import { Col, ListGroup, Row, Badge, Card } from 'react-bootstrap'
import { urlApi } from '../utils/Constan'
import ModalKeranjang from './ModalKeranjang'
import Total from './Total'

export default class Hasil extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            keranjangDetail: false,
            jumlah: 0,
            keterangan: " ",
            totalHarga: 0
        }
    }

    handleShow = (hasil) => {
        this.setState({
            showModal: true,
            keranjangDetail: hasil,
            jumlah: hasil.jumlah,
            keterangan: hasil.keterangan,
            totalHarga: hasil.total_harga
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }

    plus = () => {
        this.setState({
            jumlah: this.state.jumlah + 1,
            totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah + 1)
        })
    }

    minus = () => {
        if (this.state.jumlah !== 1) {
            this.setState({
                jumlah: this.state.jumlah - 1,
                totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah - 1)
            })
        }
    }

    changeheadler = (event) => {
        this.setState({
            keterangan: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleClose()
        const data = {
            jumlah: this.state.jumlah,
            total_harga: this.state.totalHarga,
            product: this.state.keranjangDetail.product,
            keterangan: this.state.keterangan
        }

        axios
            .put(urlApi + "keranjangs/" + this.state.keranjangDetail.id, data)
            .then(res => {
                alert("Anda Update Keranjang " + data.product.nama)
            })
            .catch(error => {
                console.log(error)
            })
    }
    handleSubmit = (event) => {

        event.preventDefault()
        this.handleClose()

        const data = {
            jumlah: this.state.jumlah,
            total_harga: this.state.totalHarga,
            product: this.state.keranjangDetail.product,
            keterangan: this.state.keterangan
        }

        axios
            .put(urlApi + "keranjangs/" + this.state.keranjangDetail.id, data)
            .then(res => {
                this.props.getlistkeranjang()
                alert("Anda Update Pesanan " + data.product.nama)
            })
            .catch(error => {
                console.log(error)
            })
    }

    hapusPesanan = (id) => {
        this.handleClose()

        axios
            .delete(urlApi + "keranjangs/" + id)
            .then(res => {
                this.props.getlistkeranjang()
                alert("Anda Hapus Pesanan " + this.state.keranjangDetail.product.nama)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { keranjangs } = this.props
        return (
            <Col md={3} mt={2}>
                <h4>Hasil</h4>
                <hr />
                {keranjangs.length !== 0 && (
                    <Card className="overflow-auto hasil">
                        <ListGroup variant="flush">
                            {keranjangs.map((hasil) => (
                                <ListGroup.Item key={hasil.id} onClick={() => this.handleShow(hasil)}>
                                    <Row>
                                        <Col xs={2}>
                                            <Badge pill variant="success">
                                                {hasil.jumlah}
                                            </Badge>
                                        </Col>
                                        <Col>
                                            {hasil.product.nama}
                                            <p>Rp. {hasil.product.harga}</p>
                                        </Col>
                                        <Col>
                                            <p>Rp. {hasil.total_harga}</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                            <ModalKeranjang handleClose={this.handleClose}
                                {...this.state}
                                plus={this.plus}
                                minus={this.minus}
                                changeheadler={this.changeheadler}
                                handleSubmit={this.handleSubmit}
                                hapusPesanan={this.hapusPesanan}
                            />
                        </ListGroup>
                    </Card>
                )}
                <Total keranjangs={keranjangs} {...this.props} />
            </Col>
        )
    }
}
