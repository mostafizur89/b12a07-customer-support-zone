
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import CustomerTikits from './component/CustomerTikits/CustomerTikits'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Banner from './component/Banner/Banner'


const fetchTikits = async () =>{
  const res =await fetch("/tikit.json")
  return res.json()
}

function App() {
  // count in progres
  const [tikitCount, setTikitCount] = useState(0)
 
  const handleClickTikit = () =>{
    toast(`In Progress`);
    setTikitCount(prev => prev + 1);

  }
  
  const tikitsPromise = fetchTikits()

  return (
    <>

    <Navbar></Navbar>

    {/* banner section------> */}
   
   <Banner tikitCount={tikitCount}></Banner>

    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <CustomerTikits
      handleClickTikit={handleClickTikit}
       tikitsPromise={tikitsPromise}></CustomerTikits>
    </Suspense>


    {/* footer section------> */}

    <Footer></Footer>
   
    <ToastContainer/>
    
    </>
  )
}

export default App
