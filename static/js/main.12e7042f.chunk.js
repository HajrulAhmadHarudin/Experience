(this.webpackJsonpKasir_Aps=this.webpackJsonpKasir_Aps||[]).push([[0],{122:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(32),s=t.n(r),i=t(14),l=t(15),o=t(17),j=t(16),h=t(63),u=t(9),d=t(134),b=t(128),g=t(136),m=t(131),O=t(1),p=function(){return Object(O.jsx)(d.a,{expand:"lg",variant:"dark",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(d.a.Brand,{href:"#",children:"BelanjaBoss"}),Object(O.jsx)(d.a.Toggle,{"aria-controls":"navbarScroll"}),Object(O.jsx)(d.a.Collapse,{id:"navbarScroll",className:"justify-content-end ",children:Object(O.jsxs)(g.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(O.jsx)(g.a.Link,{href:"#action1",children:"Home"}),Object(O.jsx)(g.a.Link,{href:"#action2",children:"About Us"}),Object(O.jsxs)(m.a,{title:"Product",id:"navbarScrollingDropdown",children:[Object(O.jsx)(m.a.Item,{href:"#action3",children:"Action"}),Object(O.jsx)(m.a.Item,{href:"#action4",children:"Another action"}),Object(O.jsx)(m.a.Divider,{}),Object(O.jsx)(m.a.Item,{href:"#action5",children:"Something else here"})]})]})})]})})},x=t(2),f=t(129),k=t(84),v=(t(98),t(99),t(137)),y=t(13),C=t.n(y),S="http://localhost:3004/",D=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).state={categories:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this;C.a.get(S+"categories").then((function(e){var t=e.data;a.setState({categories:t})})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){var a=this.state.categories,e=this.props,t=e.changeCategory,n=e.categoryYangDipilih;return Object(O.jsxs)(k.a,{md:2,mt:2,children:[Object(O.jsx)("h4",{children:"Daftar Kategori"}),Object(O.jsx)("hr",{}),Object(O.jsx)(v.a,{className:"pilihanTuhan",children:a&&a.map((function(a){return Object(O.jsx)(v.a.Item,{onClick:function(){return t(a.nama)},className:n===a.nama&&" pilihan ",children:Object(O.jsx)("h5",{children:a.nama})},a.id)}))})]})}}]),t}(n.Component),w=t(135),H=t(130),B=t(132),N=t(133),T=t(83),A=function(a){var e=a.handleClose,t=a.showModal,n=a.keranjangDetail,c=a.jumlah,r=a.keterangan,s=a.plus,i=a.minus,l=a.changeheadler,o=a.handleSubmit,j=a.totalHarga,h=a.hapusPesanan;return n?Object(O.jsxs)(B.a,{show:t,onHide:e,children:[Object(O.jsx)(B.a.Header,{closeButton:!0,children:Object(O.jsxs)(B.a.Title,{children:[n.product.nama," ","Rp. ",n.product.harga]})}),Object(O.jsx)(B.a.Body,{children:Object(O.jsxs)(N.a,{onSubmit:o,children:[Object(O.jsxs)(N.a.Group,{children:[Object(O.jsx)(N.a.Label,{children:"Total Harga :"}),Object(O.jsxs)("p",{children:["Rp. ",j]})]}),Object(O.jsxs)(N.a.Group,{children:[Object(O.jsx)(N.a.Label,{children:"Edit Jumlah :"}),Object(O.jsx)(T.a,{size:"sm",variant:"danger",onClick:function(){return i()},children:"-"}),Object(O.jsx)("strong",{style:{margin:"0 5px"},children:c}),Object(O.jsx)(T.a,{size:"sm",variant:"danger",onClick:function(){return s()},children:"+"})]}),Object(O.jsxs)(N.a.Group,{controlid:"exampleForm.ControlTextArea1",children:[Object(O.jsx)(N.a.Label,{children:"Keterangan :"}),Object(O.jsx)(N.a.Control,{as:"textarea",rows:"3",name:"keterangan",placeholder:"Pedas, Pakai Uang Kamu dulu Ya Nanti Aku Ganti, Pakai Micin Biar Bodoh ",value:r,onChange:function(a){return l(a)}})]}),Object(O.jsx)(T.a,{variant:"success",type:"submit",style:{margin:"10px 0"},children:"Simpan"})]})}),Object(O.jsx)(B.a.Footer,{children:Object(O.jsx)(T.a,{variant:"danger",onClick:function(){return h(n.id)},children:"Hapus Pesanan"})})]}):Object(O.jsxs)(B.a,{show:t,onHide:e,children:[Object(O.jsx)(B.a.Header,{closeButton:!0,children:Object(O.jsx)(B.a.Title,{children:"Kosong"})}),Object(O.jsx)(B.a.Body,{children:"Kosong"}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(T.a,{variant:"secondary",onClick:e,children:"Close"}),Object(O.jsx)(T.a,{variant:"primary",onClick:e,children:"Save Change"})]})]})},K=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=e.call.apply(e,[this].concat(c))).submitTotalBayar=function(e){var t={total_bayar:e,menus:a.props.keranjangs};C.a.post(S+"pesanans",t).then((function(e){a.props.history.push("/sukses")}))},a}return Object(l.a)(t,[{key:"render",value:function(){var a=this,e=this.props.keranjangs.reduce((function(a,e){return a+e.total_harga}),0);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"total ",children:[Object(O.jsxs)("div",{className:"total_a",children:[Object(O.jsx)("h4",{children:" Total "}),Object(O.jsxs)("h5",{children:[" Rp. ",e," "]})]}),Object(O.jsx)(T.a,{onClick:function(){return a.submitTotalBayar(e)},children:"Bayar"})]}),Object(O.jsxs)("div",{className:"d-sm-block d-md-none",children:[Object(O.jsxs)("div",{className:"total_a",children:[Object(O.jsx)("h4",{children:" Total "}),Object(O.jsxs)("h5",{children:[" Rp. ",e," "]})]}),Object(O.jsx)(T.a,{onClick:function(){return a.submitTotalBayar(e)},children:"Bayar"})]})]})}}]),t}(n.Component),P=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).handleShow=function(a){n.setState({showModal:!0,keranjangDetail:a,jumlah:a.jumlah,keterangan:a.keterangan,totalHarga:a.total_harga})},n.handleClose=function(){n.setState({showModal:!1})},n.plus=function(){n.setState({jumlah:n.state.jumlah+1,totalHarga:n.state.keranjangDetail.product.harga*(n.state.jumlah+1)})},n.minus=function(){1!==n.state.jumlah&&n.setState({jumlah:n.state.jumlah-1,totalHarga:n.state.keranjangDetail.product.harga*(n.state.jumlah-1)})},n.changeheadler=function(a){n.setState({keterangan:a.target.value})},n.handleSubmit=function(a){a.preventDefault(),n.handleClose();var e={jumlah:n.state.jumlah,total_harga:n.state.totalHarga,product:n.state.keranjangDetail.product,keterangan:n.state.keterangan};C.a.put(S+"keranjangs/"+n.state.keranjangDetail.id,e).then((function(a){alert("Anda Update Keranjang "+e.product.nama)})).catch((function(a){console.log(a)}))},n.handleSubmit=function(a){a.preventDefault(),n.handleClose();var e={jumlah:n.state.jumlah,total_harga:n.state.totalHarga,product:n.state.keranjangDetail.product,keterangan:n.state.keterangan};C.a.put(S+"keranjangs/"+n.state.keranjangDetail.id,e).then((function(a){n.props.getlistkeranjang(),alert("Anda Update Pesanan "+e.product.nama)})).catch((function(a){console.log(a)}))},n.hapusPesanan=function(a){n.handleClose(),C.a.delete(S+"keranjangs/"+a).then((function(a){n.props.getlistkeranjang(),alert("Anda Hapus Pesanan "+n.state.keranjangDetail.product.nama)})).catch((function(a){console.log(a)}))},n.state={showModal:!1,keranjangDetail:!1,jumlah:0,keterangan:" ",totalHarga:0},n}return Object(l.a)(t,[{key:"render",value:function(){var a=this,e=this.props.keranjangs;return Object(O.jsxs)(k.a,{md:3,mt:2,children:[Object(O.jsx)("h4",{children:"Hasil"}),Object(O.jsx)("hr",{}),0!==e.length&&Object(O.jsx)(w.a,{className:"overflow-auto hasil",children:Object(O.jsxs)(v.a,{variant:"flush",children:[e.map((function(e){return Object(O.jsx)(v.a.Item,{onClick:function(){return a.handleShow(e)},children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(k.a,{xs:2,children:Object(O.jsx)(H.a,{pill:!0,variant:"success",children:e.jumlah})}),Object(O.jsxs)(k.a,{children:[e.product.nama,Object(O.jsxs)("p",{children:["Rp. ",e.product.harga]})]}),Object(O.jsx)(k.a,{children:Object(O.jsxs)("p",{children:["Rp. ",e.total_harga]})})]})},e.id)})),Object(O.jsx)(A,Object(x.a)(Object(x.a)({handleClose:this.handleClose},this.state),{},{plus:this.plus,minus:this.minus,changeheadler:this.changeheadler,handleSubmit:this.handleSubmit,hapusPesanan:this.hapusPesanan}))]})}),Object(O.jsx)(K,Object(x.a)({keranjangs:e},this.props))]})}}]),t}(n.Component),M=function(a){var e=a.menu,t=a.masukKeranjang;return Object(O.jsx)(k.a,{md:4,xs:6,className:"mb-4",children:Object(O.jsxs)(w.a,{className:"shadow",onClick:function(){t(e)},children:[Object(O.jsx)(w.a.Img,{variant:"top",src:"images/"+e.category.nama.toLowerCase()+"/"+e.gambar}),Object(O.jsxs)(w.a.Body,{children:[Object(O.jsx)(w.a.Title,{children:e.nama}),Object(O.jsxs)(w.a.Text,{children:["Rp.",e.harga]})]})]})})},_=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).changeCategory=function(a){n.setState({categoryYangDipilih:a,menu:[]}),C.a.get(S+"products?category.nama="+a).then((function(a){var e=a.data;n.setState({menus:e})})).catch((function(a){console.log(a)}))},n.masukKeranjang=function(a){C.a.get(S+"keranjangs?product.id="+a.id).then((function(e){if(0===e.data.length){var t={jumlah:1,total_harga:a.harga,product:a};C.a.post(S+"keranjangs",t).then((function(a){n.getlistkeranjang(),alert("Anda Sukses Membeli "+t.product.nama)})).catch((function(a){console.log(a)}))}else{var c={jumlah:e.data[0].jumlah+1,total_harga:e.data[0].total_harga+a.harga,product:a};C.a.put(S+"keranjangs/"+e.data[0].id,c).then((function(a){alert("Anda Sukses Membeli "+c.product.nama)})).catch((function(a){console.log(a)}))}})).catch((function(a){console.log(a)}))},n.getlistkeranjang=function(){C.a.get(S+"keranjangs").then((function(a){var e=a.data;n.setState({keranjangs:e})})).catch((function(a){console.log(a)}))},n.state={menus:[],categoryYangDipilih:"Makanan",keranjangs:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this;C.a.get(S+"products?category.nama="+this.state.categoryYangDipilih).then((function(e){var t=e.data;a.setState({menus:t})})).catch((function(a){console.log(a)})),this.getlistkeranjang()}},{key:"render",value:function(){var a=this,e=this.state,t=e.menus,n=e.categoryYangDipilih,c=e.keranjangs;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:" mt-2",children:Object(O.jsx)(b.a,{fluid:!0,children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(D,{changeCategory:this.changeCategory,categoryYangDipilih:n}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)("h4",{children:"Daftar Produk"}),Object(O.jsx)("hr",{}),Object(O.jsx)(f.a,{className:"overflow-auto menu",children:t&&t.map((function(e){return Object(O.jsx)(M,{menu:e,masukKeranjang:a.masukKeranjang},e.id)}))})]}),Object(O.jsx)(P,Object(x.a)(Object(x.a)({keranjangs:c},this.props),{},{getlistkeranjang:this.getlistkeranjang}))]})})}),Object(O.jsxs)("div",{className:"skill",children:[Object(O.jsx)("p",{children:"Skill Python"}),Object(O.jsx)("progress",{value:"0",max:"100"})]})]})}}]),t}(n.Component),I=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){C.a.get(S+"keranjangs").then((function(a){a.data.map((function(a){return C.a.delete(S+"keranjangs/"+a.id).then((function(a){return console.log(a)})).catch((function(a){return console.log(a)}))}))})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"sukses",children:[Object(O.jsx)("h3",{children:"Pesanan Anda Sukses"}),Object(O.jsx)("p",{children:"Terima Kasih Telah Memesan"}),Object(O.jsx)(T.a,{as:h.b,to:"/",children:"Kembali"})]})}}]),t}(n.Component),R=function(a){Object(o.a)(t,a);var e=Object(j.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(h.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)("main",{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",component:_,exact:!0}),Object(O.jsx)(u.a,{path:"/sukses",component:I,exact:!0})]})})]})}}]),t}(n.Component);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))},99:function(a,e,t){}},[[122,1,2]]]);
//# sourceMappingURL=main.12e7042f.chunk.js.map