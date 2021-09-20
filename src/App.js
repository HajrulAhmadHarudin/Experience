
// import Navbar from './component/Navbar';
// import Footer from './component/Footer';
// import Content from './component/Content';
// import Tombolsuka from './component/Tombolsuka';

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbarbs from './komponen/Navbarbs'
// import Home from './pages/Home'
import Home from './pages/Home'
import Sukses from './pages/Sukses'
// import { Sukses ,Home } from './pages/Index'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbarbs />
          <main>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}



// function App() {
//   // const artikel = [
//   //   { id: 1, title: "Judul 1", description: "ini deskripsi 1"},
//   //   { id: 2, title: "Judul 2", description: "ini deskripsi 2"},
//   //   { id: 3, title: "Judul 3", description: "ini deskripsi 3"},
//   // ];
//   // Dari pada tulis satu-satu kalau datanya banyak mending di mapkan 

//   return (
//     <div className="App">
//       {/* <Navbar/>
//       <Tombolsuka klik = " Saya Suka"/>

//       {artikel.map(artikel => { 
//         return(
//           <Content key={artikel.id} judul={artikel.title} deskripsi={artikel.description}/>
//         )
//       })}
//       <Footer/> */}



//     </div>
//   );
// }

// export default App;
