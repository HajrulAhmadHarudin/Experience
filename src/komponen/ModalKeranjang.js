import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const ModalKeranjang = ({ handleClose, showModal, keranjangDetail, jumlah, keterangan, plus, minus, changeheadler, handleSubmit, totalHarga, hapusPesanan}) => {
    if (keranjangDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama}{" "}
                        Rp. {keranjangDetail.product.harga}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Total Harga :</Form.Label>
                            {/* <p>Rp. {keranjangDetail.total_harga}</p> sudah ada penggantinya dalam menampilkan harga yang sinkron */}
                            <p>Rp. {totalHarga}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{'Edit Jumlah :'}</Form.Label>
                            <Button size="sm" variant="danger" onClick={() => minus()}>-</Button>
                            <strong style={{ margin: "0 5px" }}>{jumlah}</strong>
                            <Button size="sm" variant="danger" onClick={() => plus()}>+</Button>
                        </Form.Group>
                        <Form.Group controlid="exampleForm.ControlTextArea1">
                            <Form.Label>Keterangan :</Form.Label>
                            <Form.Control as="textarea" rows="3" name="keterangan"
                                placeholder="Pedas, Pakai Uang Kamu dulu Ya Nanti Aku Ganti, Pakai Micin Biar Bodoh "
                                value={keterangan}
                                onChange={(event) => changeheadler(event)}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="success" type="submit" style={{ margin: "10px 0" }}>
                            Simpan
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
                        Hapus Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kosong</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Kosong
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Change
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default ModalKeranjang
