
import './App.css'

function App() {
  

  return (
    <>

    {/* header section ----> */}
    <div className="border-2 flex justify-between max-w-[1200px] mx-auto">

     <div>
       <a className="btn btn-ghost text-xl font-bold ">CS — Ticket System</a>
     </div>
      
      <div className='flex justify-around items-center'>
         <div className=''>
           <ul className="menu menu-horizontal px-1">
             <li><a>Home</a></li>
             <li><a>FAQ</a></li>
             <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
           </ul>
         </div>
         <div className="">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</a>
         </div>
      </div>

    </div>

    {/* banner section------> */}

    <div className='max-w-[1200px] mx-auto flex justify-between items-center gap-3 my-[40px]'>

      <div className='border-2 w-1/2 h-[250px] flex justify-center items-center rounded-lg '>
        <div>
          <h5 className='font-semibold text-2xl'>In-Progress</h5>
          <h2 className='flex justify-center items-center text-5xl font-bold'>0</h2>
        </div>
      </div>
      <div className='border-2 w-1/2 h-[250px] flex justify-center items-center rounded-lg'>
        <div className=''>
          <h5 className='font-semibold text-2xl'>Resolve</h5>
          <h2 className='flex justify-center items-center text-5xl font-bold'>0</h2>
        </div>
      </div>

    </div>
   
  

    </>
  )
}

export default App
