import Header from './../header/Header' ;
import Footer from './../footer/Footer' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './Layout.css'
 function Layout({children}) {
  return (
  <div className="App mt-0  d-flex flex-column  " >
      <Header></Header>
      {children}
      <Footer></Footer>
  </div>
  )
} ; 

export default Layout ; 
//style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}