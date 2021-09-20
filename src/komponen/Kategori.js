import React, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { urlApi } from '../utils/Constan'

export default class Kategori extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(urlApi + "categories")
            .then(res => {
                const categories = res.data;
                this.setState({ categories })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { categories } = this.state
        const { changeCategory, categoryYangDipilih } = this.props

        // console.log("Kateorinya sebagai berikut :", this.state.categories)
        return (
            <Col md={2} mt={2} >
                <h4>Daftar Kategori</h4>
                <hr />
                <ListGroup className = {'pilihanTuhan'}>
                    {categories && categories.map((category =>
                        <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)}
                        className = {categoryYangDipilih === category.nama && " pilihan " } >
                            <h5>{category.nama}</h5>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}
