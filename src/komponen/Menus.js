import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Menus = ({ menu , masukKeranjang}) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" onClick={() => {masukKeranjang(menu)}}>
                <Card.Img variant="top" src={"images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp.{menu.harga}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus
