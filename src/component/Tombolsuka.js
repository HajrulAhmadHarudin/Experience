import React from 'react'

class Tombolsuka extends React.Component{
    state = {
        diklik: false
    }
    handleClick = () => {
        //alert('anda telah mengklik tombol like')
        this.setState(
            {diklik: true}
        )
    }
    render(){
    if(this.state.diklik){
        return <h3> Anda Menyukai Halaman Ini {this.props.klik }</h3>
    }
    else{
        return <button onClick={this.handleClick}>{this.props.klik}</button>
    }
  }
}

export default Tombolsuka