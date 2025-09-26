
import { Suspense } from 'react'
import './App.css'
import CustomerTikits from './component/CustomerTikits/CustomerTikits'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Banner from './component/Banner/Banner'

const fetchTikits = async () =>{
  const res =await fetch("/tikit.json")
  return res.json()
}

function App() {
  
  const tikitsPromise = fetchTikits()

  return (
    <>

    <Navbar></Navbar>

    {/* banner section------> */}
    <Banner></Banner>

    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <CustomerTikits tikitsPromise={tikitsPromise}></CustomerTikits>
    </Suspense>


    {/* footer section------> */}

    <Footer></Footer>
   
  

    </>
  )
}

export default App
