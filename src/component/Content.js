import React from 'react'

function Content(props){
    {/* kalau menggunakan props kemudian dipancing
      pada funtion yang ingin di letakan props. Pada
      kasus ini ada pada content*/}
    const style = { backgroundColor:"teal", color:"white"}
    return(
        <div style = {style}>
            <h1>{props.judul}</h1>
            <p>{props.deskripsi}</p>
        </div>
    )
}

export default Content