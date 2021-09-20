import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Kategori from '../komponen/Kategori';
import Hasil from '../komponen/Hasil';
import Menus from '../komponen/Menus';
import React, { Component } from 'react'
import { urlApi } from '../utils/Constan'
import axios from 'axios'

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoryYangDipilih: 'Makanan',
      keranjangs: []
    }
  }

  // Memasukan dan Memilih Daftar Produk
  componentDidMount() {
    axios.get(urlApi + "products?category.nama=" + this.state.categoryYangDipilih)
      .then(res => {
        // console.log("Respon = ", res)
        const menus = res.data;
        this.setState({ menus })
      })
      .catch(error => {
        console.log(error)
      })


    // Memasukan ke hasil  
    this.getlistkeranjang()

    // AkhirMemasukan ke hasil 
  }

  changeCategory = (value) => {
    this.setState({
      categoryYangDipilih: value,
      menu: []
    })

    axios.get(urlApi + "products?category.nama=" + value)
      .then(res => {
        // console.log("Respon = ", res)
        const menus = res.data;
        this.setState({ menus })
      })
      .catch(error => {
        console.log(error)
      })
  }
  // Akhir Memasukan dan Memilih Menu

  // Awal Membuat hasil
  // Membuat metode
  masukKeranjang = (value) => {

    axios
      .get(urlApi + "keranjangs?product.id=" + value.id)
      .then(res => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value
          }

          axios
            .post(urlApi + "keranjangs", keranjang)
            .then(res => {
              this.getlistkeranjang()
              alert("Anda Sukses Membeli " + keranjang.product.nama)
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          }
          axios
            .put(urlApi + "keranjangs/" + res.data[0].id, keranjang)
            .then(res => {
              alert("Anda Sukses Membeli " + keranjang.product.nama)
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
      .catch(error => {
        console.log(error)
      })

  }
  // Akhir Membuat Hasil

  // Refress Otomatis Untuk Hasil
  // componentDidUpdate(update) {
  //   if (this.state.keranjangs !== update.keranjangs) {
  //     axios.get(urlApi + "keranjangs")
  //       .then(res => {
  //         // console.log("Respon = ", res)
  //         const keranjangs = res.data;
  //         this.setState({ keranjangs })
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }


  getlistkeranjang = () => {
    axios.get(urlApi + "keranjangs")
      .then(res => {
        // console.log("Respon = ", res)
        const keranjangs = res.data;
        this.setState({ keranjangs })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Akhir Refress Otomatis Untuk Hasil

  render() {
    const { menus, categoryYangDipilih, keranjangs } = this.state
    return (
      <div>
        <div className=" mt-2" >
          <Container fluid >
            <Row>
              <Kategori changeCategory={this.changeCategory} categoryYangDipilih={categoryYangDipilih} />
              <Col>
                <h4>Daftar Produk</h4>
                <hr />
                <Row className="overflow-auto menu">
                  {menus && menus.map((menu) => (
                    <Menus key={menu.id} menu={menu} masukKeranjang={this.masukKeranjang} />
                  ))}
                </Row>
              </Col>
              <Hasil keranjangs={keranjangs} {...this.props} getlistkeranjang={this.getlistkeranjang}/>
            </Row>
          </Container>
        </div>
        <div className="skill">
          <p>Skill Python</p>
          <progress value="0" max="100"></progress>
        </div>
      </div>
    )
  }
}